(ns threatmodeler.core
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]
            [clojure.string :as str]
            [goog.string.format]
            [react-moveable :as Moveable]
            [cljs.test :refer-macros [deftest is testing]]
            [reagent-keybindings.keyboard :as kb]))

(defn html-element->element-id [element]
  (-> element .-dataset .-elementId))


(def threat-examples
  {
   :content-over-http {:description "User Connects Over HTTP" :mitigation "Configure HSTS Preloading. Return Strict-Transporty-Security header, and include sub domains. Redirect HTTP to HTTPS."}
   :xxs {:description "Application displays user supplied data" :mitigation "Encode user input for the appropiate context it appears in (HTML, JavaScript, etc.). Configure CORS policies"}
   :sensitivedata {:description "Sensitive Personal Identifiable Information is stored." :mitigation "Encrypt user data. Use a vetted cryptography library/service when possible, such as libsodium. Ensure the chosen library makes use of strong cryptargaphy (uses non-broken cryptographic alogirhtm,  generates keys using a CSRPNG, does not re-use IVs, facilities key rotations, etc.)"}
   :password {:description "Database contains user passwords."  :mitigation "Use a cryptographically secure hashing algorithm with a tuneable work factor, such as scrypt. Ensure"} 
   :xxe {:description "XML is processed." :mitigation "Disable Document Type Definition (DTD) parsing and external entity resolving when possible."}
   :file-uploads {:description "Users can upload data." :mitigation "Restrict what type of data can be uploaded. When downloading data, limit mime-types of response. If fils are saved to disk, perform path conacilization on filesand ensure target file is under expected directory and path."}
   :serialization {:description "User supplied data is deserialized" :mitigation "Use a secre serialization framework/library which can not be leveraged to deserialize arbitrary types (Ex, Avoid Binary Formatte in .NET). Validate user supplied data to avoid mass assignment and injection vulnerabilites."} 
   :tls {:description "Sensitive data tranfered over the network." :mitigation "Use Transport Layer Security to secure communications. Ensure strong cipher-suites and praramters are used."}
   :authentication {:description "Session identifiers are used to identify users." :mitigation "Generation Session IDs form a cryptographically ecure source. Ensure the length of session IDs are not brute forceable, such as 128 bits of entropy in length."}})

(defn create-lookup-from-vector-of-hashmaps [id-function hashmap]
  (into {} (map (juxt id-function identity) hashmap)))

(def threat-groups (atom {:groups [] :scenarios {}}))
(defn add-threat-group!
  "Creates lookup of groups and scenarios"
  [group-name scenarios]
  (swap! threat-groups
         (fn [x]
           (let [scenario-ids (map :id scenarios)]
             (-> (update-in x [:groups] conj [group-name scenario-ids])
                 (update-in [:scenarios] merge (create-lookup-from-vector-of-hashmaps :id scenarios)))))))

(add-threat-group!
 "Application Type, Language, OS"
 [{:id :web-application          :name "Web Application" :threats #{:content-over-http :xss}}
  {:id :unsafe-memory-components :name "Unsafe Memory Components (C,C++,Unsafe Rust, Java JNI" :threats #{:memory-corruption}}
  {:id :desktop-application      :name "Desktop Application" :threats #{:todo}}
  {:id :mobile-application       :name "Mobile Application" :threats #{:todo}}
  {:id :windows                  :name "Windows" :threats #{:todo}}
  {:id :linux                    :name "Linux" :threats #{:todo}}])

(add-threat-group!
 "Data Processing"
 [{:id :file-upload :name "File Upload" :threats #{:file-uploads}}
  {:id :deserialize :name "Deserialize Data" :threats #{:serialization}}
  {:id :parses-xml  :name "Parses XML" :threats #{:xxe}}
  {:id :display-user-input-as-html :name "Display User Input as HTML/Scripts" :threats #{:todo}}
  {:id :run-system-commands :name "Run System Commands" :threats #{:todo}}
  {:id :machine-learning :name "Machine Learning" :threats #{:todo}}])

(add-threat-group!
 "Authentication"
 [{:id :oauth :name "OAuth" :threats #{:todo}}
  {:id :jwt :name "JWT" :threats #{:todo}}
  {:id :cookies :name "Cookies" :threats #{:todo}}
  {:id :username :name "Username and Passwords" :threats #{:todo}}])

(add-threat-group!
 "Cryptography"
 [{:id :encrypts :name "Encrypts Data" :threats #{:todo}}
  {:id :signs-data :name "Signs Data" :threats #{:todo}}])

(add-threat-group!
 "Misc"
 [{:id :stores-sensitive-data :name "Stores Sensitive Data" :threats #{:todo}}
  {:id :makes-use-of-third-party-libraries :name "Makes Use Of Third Party Libraries" :threats #{:todo}}
  {:id :docker :name "Docker" :threats #{:todo}}
  {:id :processes-network-traffic :name "Processes Network Traffic" :threats #{:todo}}
  {:id :stores-important-data :name "Stores Important Data" :threats #{:todo}}])

(def app-state (r/atom {:ui-state {:active-diagram-element-id nil
                                   :element-transformation-in-progress nil
                                   :last-element-dragged nil
                                   :last-item-shift-clicked nil}
                        :threat-model {:elements {} :threats []}}))

(def ui-state (r/cursor app-state [:ui-state]))
(def threat-model (r/cursor app-state [:threat-model]))


                                        ;TODO add validation to ensure only valid properties are provided
(defmulti create-element :type)
(defmethod create-element :actor          [d] (merge {:id (str (random-uuid)) :name "TODO" :width 100 :height 50 :x 100 :y 100} d))
(defmethod create-element :process        [d] (merge {:id (str (random-uuid)) :name "TODO" :width 100 :height 100 :x 100 :y 100} d))
(defmethod create-element :datastore      [d] (merge {:id (str (random-uuid)) :name "TODO" :width 100 :height 50 :x 100 :y 100} d))
(defmethod create-element :boundary       [d] (merge {:id (str (random-uuid)) :width 100 :height 20 :x 100 :y 100} d))
(defmethod create-element :communication  [d] (merge {:id (str (random-uuid))} d))


(defn add-element [app-state data]
  "Add an element to the given app state."
  (let [element (create-element data)]
    (assoc-in app-state [:threat-model :elements (:id element)] element)))

(defn add-element! 
  "Adds element to threat model, and udpates corresponding atom."
  [data]
  (let [element (create-element data)]
    (swap! app-state add-element data)))


  (defn filter-elements-referencing-element-id [element-id element]
  "Return elements which directly references element."
  (contains? (set (vals (select-keys element [:to :from :id]))) element-id ))

(defn delete-element-and-communications
  "Deletes element from threat model, and any communications referencing it"
  [app-state element]
  (let [referencing-elements (filter (partial filter-elements-referencing-element-id (:id element)) (-> app-state :threat-model :elements (vals)))
        referencing-element-ids (map :id referencing-elements)]
    (update-in app-state [:threat-model :elements] (fn [x] (apply dissoc x app-state referencing-element-ids)))))
  (defmulti delete-element (fn [app-state element] (:type element)))
  (defmethod delete-element :communication [app-state element] (update-in app-state [:threat-model :elements] dissoc (:id element)))
  (defmethod delete-element :default [app-state element] (delete-element-and-communications app-state element))
             

  ;Populate threat model with example data
(add-element! (create-element {:type :actor         :name "Web User" :x 50  :y 150 :id "webuser" :threats #{:authentication}}))
(add-element! (create-element {:type :process       :name "webapp"    :x 300 :y 125 :id "webapp1" :threats #{:xxs :xxe :serialization}}))
(add-element! (create-element {:type :process       :name "third party"  :x 500 :y 125 :id "webapp2" :threats #{}}))
(add-element! (create-element {:type :datastore     :name "database"  :x 300  :y 300 :id "datastore1" :threats #{:sensitivedata :password} }))
(add-element! (create-element {:type :communication :from "webuser" :to "webapp1" :name "communication1" :threats #{:tls}}))
(add-element! (create-element {:type :communication :from "webapp1" :to "datastore1" :name "communication2" :threats #{:tls}}))
(add-element! (create-element {:type :communication :from "webapp1" :to "webapp2" :name "communication3" :threats #{:tls}}))
(add-element! (create-element {:type :boundary :name "boundary1"}))

(defn set-active-moveable-element!
"Sets the active element which can be moved and dragged around.
If an item is currently being transformed, the active element is not updated."

  [id e]
  (when-not (:element-transformation-in-progress @ui-state)
  (swap! ui-state assoc :active-diagram-element-id id)))



  (def moveable (r/adapt-react-class Moveable))

  (defn calculate-line-points [element1 element2]
  "Find best line between two elements, and return points."

(cond
                                        ;left of second element
  (< (+ (:x element1) (:width element1)) (:x element2))
  {:x1 (+ (:x element1) (:width element1))
   :y1 (+ (:y element1) (/ (:height element1) 2))
   :x2 (:x element2)
   :y2 (+ (:y element2) (/ (:height element2) 2))}

                                        ;to right of second element
  (> (:x element1) (+ (:x element2) (:width element2)))
  {:x1 (+ (:x element2) (:width element2))
   :y1 (+ (:y element2) (/ (:height element2) 2))
   :x2 (:x element1)
   :y2 (+ (:y element1) (/ (:height element1) 2))}


                                        ;above second element
  (< (:y element1) (:y element2))
  {:x1 (+ (:x element1) (/ (:width element1) 2))
   :y1 (+ (:y element1) (:height element1))
   :x2 (+ (:x element2) (/ (:width element2) 2))
   :y2 (:y element2)}


                                        ;below second elements
  true
  {:x1 (+ (:x element2) (/ (:width element2) 2))
   :y1 (+ (:y element2) (:height element2))
   :x2 (+ (:x element1) (/ (:width element1) 2))
   :y2 (:y element1)}))








(defn render-line [ {:keys [x1 y1 x2 y2 style id] :as line}]
(let [lineLength (js/Math.sqrt (+ (js/Math.pow (- x2 x1) 2)
                                  (js/Math.pow (- y2 y1) 2)))

      slope (/ (- y1 y2) (- x1 x2))


                                        ;We have to do some funky math to rotations, as Y is inverted on screen
                                        ;(higher Y cord is lowe ron screen...)
      rotationDegree (if (and (>= x1 x2)
                              (< y1 y2))
                       (- js/Math.PI   (* -1 (js/Math.atan slope)))
                       (js/Math.atan slope))
      style (or style "solid")]
  

  [:div.line.diagram-threat-model-element {:style {:height "2px"
                                                   :width (goog.string.format "%dpx" lineLength)
                                                   :border-top (goog.string.format "2px %s black" style)
                                                   :transform (goog.string.format "translate(%dpx,%dpx) rotate(%frad)" x1 y1 rotationDegree)
                                                   :transform-origin "center left"
                                                   :padding (if (:draggable line) "5px" "0")}
                                           :class (str "moveable-element-" id)
                                           :on-mouse-over (partial set-active-moveable-element! id)}]))


(defn get-closest-html-element 
  "Given a HTML element and selector, find the closest node to it.
   If the selector matches the given node, return the curret node."
  [element selector]
  (.closest element selector))

(defn diagram-element-event-on-mouse-up! 
  "Handles on mouse up event for diagram elements.
   Used to connect diagram elements together when shift key is 
   held while clicking elements."

  [element-id e]
  (when e.shiftKey
    (swap! app-state
           (fn [state]
             (let [last-item-shift-clicked (-> state :ui-state :last-item-shift-clicked)]

                                        ;When we have a item we previously shift-clicked, connect the elements together
                                        ;and forger the last element clicked
               (if last-item-shift-clicked
                 (-> (add-element state {:type :communication :from last-item-shift-clicked :to element-id})
                     (assoc-in [:ui-state :last-item-shift-clicked] nil))

                                        ;If we haven't previously shift-clicked an item, just remember it
                 (assoc-in state [:ui-state :last-item-shift-clicked] element-id)))))))


(defn render-threat-model-element-common [{:keys [x y type name id rotate]}]
  [:span.diagram-threat-model-element {:class (str "diagram-" (cljs.core/name type)
                                                   " moveable-element-" id)
                                       :style {:transform (goog.string.format "translate(%dpx,%dpx) rotate(%ddeg)" x y (or rotate 0))}
                                       :data-element-id id
                                       :on-mouse-up (partial diagram-element-event-on-mouse-up! id)
                                       :on-mouse-over (partial set-active-moveable-element! id)}
   [:p name]])


(defn handle-backspace-pressed! []
  "Handles backspace key event. Causes element to be deleted."
  (when-let [current-element-id (get-in @app-state [:ui-state :active-diagram-element-id])]
    (when-let [current-element (get-in @app-state [:threat-model :elements current-element-id])]
      (swap! app-state delete-element current-element))))

(defn handle-enter-pressed! []
  "Handles pressing over enter key for diagram elements. Used to re-name element."
  (when-let [current-element-id (get-in @app-state [:ui-state :active-diagram-element-id])]
    (when-let [current-element (get-in @app-state [:threat-model :elements current-element-id])]
      (swap! app-state assoc-in [:threat-model :elements current-element-id :name] (js/prompt "Element name:" (:name current-element))))))

(defn render-threat-model-element-communication [element elements]
  [render-line (merge (select-keys element [:id]) (calculate-line-points (get elements (:from element)) (get elements (:to element))))])

(defn render-threat-model-element-boundary [element elements]
  [render-line (merge element {:style "dashed" :draggable true})])

(defmulti render-threat-model-element (fn [element _] (:type element)))
(defmethod render-threat-model-element :actor [element] (render-threat-model-element-common element))
(defmethod render-threat-model-element :process [element] (render-threat-model-element-common element))
(defmethod render-threat-model-element :datastore [element] (render-threat-model-element-common element))
(defmethod render-threat-model-element :communication [element elements] (render-threat-model-element-communication element elements))
(defmethod render-threat-model-element :boundary [element ] (render-threat-model-element-common element))


(defn toolbar []
  [:div
   [:button {:on-click #(add-element! (create-element {:type :actor :x 100 :y 100}))} "Add Actor"]
   [:button {:on-click #(add-element! (create-element {:type :process :x 100 :y 300 }))} "Add Process"]
   [:button {:on-click #(add-element! (create-element {:type :datastore :x 100 :y 100}))} "Add Datastore"]
   [:button {:on-click #(add-element! (create-element {:type :boundary :x 100 :y 100 }))} "Add Trust Boundary"]])

(defn diagram-event-element-drag-stop [id event data]
  "Persist position of dragged threat model diagram element to local state."
  (swap! threat-model update-in [:elements id] merge {:x (-> data .-lastX) :y (-> data .-lastY)}))


(defn moveable-on-rotate-start! [event]
  "Callback handler for starting of rotation. Sets rotation degree to current element rotation."
  (let [active-element-id (html-element->element-id (-> event .-target))
        cur-element-rotation (get-in @app-state [:threat-model :elements active-element-id :rotate])]
    (swap! ui-state
           merge
           {:active-diagram-element-id active-element-id
            :element-transformation-in-progress true
            :orig-rotate cur-element-rotation})))

(defn moveable-on-rotate! [event]
  (let [active-element-id (-> @app-state :ui-state :active-diagram-element-id)
        element-info (get-in @app-state [:threat-model :elements active-element-id])
        rotate-amount (+ (-> @app-state :ui-state :orig-rotate) (int (-> event .-beforeRotate)))]
    (swap! app-state assoc-in [:ui-state :rotate-amount] rotate-amount)
    (set! (-> event .-target .-style .-transform) (goog.string.format "translate(%dpx,%dpx) rotate(%ddeg)" (:x element-info) (:y element-info) rotate-amount))))


(defn moveable-rotate-end! [event]
  "Callback handler for finishing rotating element. Persists rotated degree to element."
  (swap! app-state
         (fn [state]
           (let [element-id (html-element->element-id (-> event .-target))
                 rotate-amount (-> state :ui-state :rotate-amount)]
             (-> (assoc-in state [:threat-model :elements element-id :rotate] rotate-amount)
                 (assoc-in [:ui-state :element-transformation-in-progress] nil))))))


(defn moveable-drag-start! [event]
  (let [element-id (html-element->element-id (-> event .-target))
        cur-element-info (get-in @threat-model [:elements element-id])]
    (swap! ui-state
           merge
           {:element-transformation-in-progress true
            :rotate 0}
           (select-keys cur-element-info [:x :y :rotate])
           {:newX (:x cur-element-info) :newY (:y cur-element-info)})))

(defn moveable-drag-on! [event]
  (let [last-element-dragged-deref @ui-state
        newX (+ (:x last-element-dragged-deref) (-> event .-left))
        newY (+ (:y last-element-dragged-deref) (-> event .-top))
        rotate (or (:rotate last-element-dragged-deref) 0)
        element-id (:active-diagram-element-id  last-element-dragged-deref)]
    (swap! ui-state merge {:newX newX :newY newY})
    (set! (-> event .-target .-style .-transform) (goog.string.format "translate(%dpx,%dpx) rotate(%ddeg)" newX newY rotate))))

(defn moveable-drag-end! []
  (let [ui-state-derefed @ui-state]
    (swap! threat-model
           update-in
           [:elements (:active-diagram-element-id ui-state-derefed)]
           (fn [cur-val]
             (merge cur-val
                    {:x (:newX ui-state-derefed)
                     :y (:newY ui-state-derefed)}))))
  (swap! ui-state assoc :element-transformation-in-progress nil))

(defn instructions []
  [:div
   [:p "Controls"
    [:br]
    "Connect element: Shift-click two elements to connect elements"
    [:br]
    "Delete element: Move mouse over element and press backspace key"
    [:br]
    "Rename-element: Move mouse over element and press enter key"]])

(defn checklist-with-header [header-name values]
  [:div.checklist-with-header
   [:h5 header-name]
   [:ul
    (doall (for [value values]
             [:li
              [:input {:type "checkbox" :name value :id value}]
              [:label {:for value} value ]]))]])


                                      
(defn render-threat-groups [threat-groups]
  (for [[group-name scenario-ids] (:groups threat-groups)]
    (checklist-with-header group-name (map
                                       (fn [x] (-> (get-in threat-groups [:scenarios x])
                                                   :name))
                                       scenario-ids))))


(defn threat-search []
  [:div
   [:input {:placeholder "What"}]
   (render-threat-groups @threat-groups)])

(defn threat-table [active-threat-id]
(let [active-element (get-in @threat-model [:elements active-threat-id])]
  [:table#threat-table
   [:tr
    [:th "Description"]
    [:th "Mitigation"]]
   (doall
    (for [threat-id (:threats active-element)]
      (let [threat-info (threat-examples threat-id)]
        [:tr 
         [:td (-> threat-info :description)]
         [:td (-> threat-info :mitigation)]])))]))

(defn active-element-name [active-threat-id]
(let [active-element (get-in @threat-model [:elements active-threat-id])]
  [:div#threats-for
   [:h5.section-label "Threats for:" ]
   [:h3.threat-name (:name active-element)]]))

(defn simple-example [threat-model]
[:div#main
 [:div#graph-area
  [instructions]
  [toolbar]
  [:div#diagram 
                                        ;Doall is required here, as for generates lazy sequence, and 
                                        ;derefs in child components won't trigget updates. known reagent issue.
     (doall (for [element (vals (:elements @threat-model))]
              (render-threat-model-element element (:elements @threat-model))))
     [moveable {:target (js/document.querySelector (str ".moveable-element-" (-> @ui-state :active-diagram-element-id)))
                :draggable true
                                        ;Drag x and y in steps of 25 points
                :throttleDrag 25 
                :throttleRotate 15 
                :onDragStart moveable-drag-start!
                :onDrag moveable-drag-on! 
                :snappable true
                :rotatable true
                :onDragEnd moveable-drag-end!
                :onRotateStart moveable-on-rotate-start!
                :onRotate moveable-on-rotate!
                :onRotateEnd moveable-rotate-end!}]
     [kb/keyboard-listener]
     [kb/kb-action "backspace" handle-backspace-pressed!]
     [kb/kb-action "enter" handle-enter-pressed!]]]
   [:div#threat-input-area
    [active-element-name (-> @ui-state :active-diagram-element-id)]
    [threat-search]
    [threat-table (-> @ui-state :active-diagram-element-id)]
    ]])

(defn ^:export main! [])

(rdom/render [simple-example threat-model] (js/document.getElementById "app"))
