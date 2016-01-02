(ns number-pairs)

(defn get-larger-numbers [xs ys]
  (vec (map max xs ys)))