function demixer(ad_id, ad_phone) {
    if (!ad_phone) return "";
    var ad_subhash = ad_phone.match(/[0-9a-f]+/g),
        ad_subhash = (ad_id % 2 === 0 ? ad_subhash.reverse() : ad_subhash).join(""),
        result = "";
    for (index = 0; ad_subhash.length > index; ++index) {
        if (index % 3 === 0){
            result += ad_subhash.substring(index, index+1)
        }
    }
    return result
}

gg = demixer("1061252694","62bd1317b63326cabbd4737606bb3d93")
console.log(gg);