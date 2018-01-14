initSidebarItems({"enum":[["Errors","Errors handles all oddities which may occur in this library."]],"mod":[["datetime","The `datetime` module supports conversions between seconds past TAI epoch and a Datetime struct. The main advantage (and challenge) is the inherent support for leap seconds. Refer to module documentation for leap second implementation details."],["durations","The `durations` module provides helpers for initializing an `std::time::Duration`."],["instant","The `instant` module is built on top of `std::time::Duration`. It is the basis of almost all computations in this library. It is the only common denominator allowing for conversions between Time Systems."],["julian","The `julian` module supports (Modified) Julian Days, which are heavily used in astronomy and its engineering friends."]],"trait":[["TimeSystem","A `TimeSystem` enables the creation of system for measuring spans of time, such as UTC or Julian days."]]});