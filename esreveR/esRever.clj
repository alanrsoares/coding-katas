(ns reverse
  (:refer-clojure :exclude [reverse]))

(defn reverse [coll]
  (reduce conj '() coll))