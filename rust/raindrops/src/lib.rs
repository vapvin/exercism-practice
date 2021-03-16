pub fn raindrops(n: u32) -> String {
    let mut res = String::new();
    let (three, five, seven) = (n % 3, n % 5, n % 7);

    if three == 0 {
        res.push_str("Pling");
    }
    if five == 0 {
        res.push_str("Plang");
    }
    if seven == 0 {
        res.push_str("Plong");
    }
    if res == "" {
        n.to_string()
    } else {
        res
    }
}
