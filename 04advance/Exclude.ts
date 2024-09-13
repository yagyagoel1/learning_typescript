type even = "click" | "scrooll" | "mousemove"

type ExcludeEvent = Exclude<even, "click"| "scroll">


 