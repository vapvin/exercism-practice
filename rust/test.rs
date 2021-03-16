use std::collections::BTreeMap;

pub fn raindrops(n: u32) -> String {
    let maps: BTreeMap<_, _> = [
        (3, "Pling"),
        (5, "Plang"),
        (7, "Plong"),
    ].iter().cloned().collect();
    let mut res = String::new();
    for(k,v) in maps.iter(){
        if n % k == 0 {
            res.push_str(v);
        }
    }
    if res == ""{
        n.to_string()
    } else {
        res
    }
}
