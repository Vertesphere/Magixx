const sparkSpellButton = document.getElementById("sparkSpell")
const pBar1Inner = document.querySelector(".pBar")
const hexAmtDisp = document.getElementById("hexAmtDisp")
const sparkCurrXpAmtDisp = document.getElementById("sparkCurrXpAmtDisp")
const sparkReqXpAmtDisp = document.getElementById("sparkReqXpAmtDisp")
const sparkLvlDisp = document.getElementById("sparkLvlDisp")
let hex = {
    amt: new Decimal("0")
}
let spark = {
    level: new Decimal("1"),
    xp: new Decimal("0"),
    reqXp: new Decimal("10"),
}   
sparkSpellButton.addEventListener("click", ()=>{
    pBar1Inner.classList.add("pBarTransition")
    pBar1Inner.style.width = "170px"
    sparkSpellButton.style.display = "none"
    setTimeout(()=>{
        pBar1Inner.classList.remove("pBarTransition")
        pBar1Inner.style.width = "0px"
        sparkSpellButton.style.display = "inline"
        hex.amt = Decimal.add(hex.amt, Decimal.pow("2", Decimal.sub(spark.level, "1")))
        spark.xp = Decimal.add(spark.xp,"1")
        sciNota(sparkCurrXpAmtDisp, spark.xp)

        sciNota(hexAmtDisp, hex.amt)
    }, 2100)
    
    
})
function leveling(){
    if(spark.xp.greaterThanOrEqualTo(spark.reqXp)==true){
        spark.xp = Decimal.sub(spark.xp, spark.reqXp)
        spark.level = Decimal.add(spark.level, "1")
        spark.reqXp = Decimal.pow("10", spark.level)
        sciNota(sparkReqXpAmtDisp, spark.reqXp)
        sciNota(sparkCurrXpAmtDisp, spark.xp)
        sparkLvlDisp.textContent = spark.level.toFixed(0)

    }
}
setInterval(leveling, 100)










//sciNotation functs***************************
function sciNota(reqDisp, reqValue){
    let value ={
        manti: 0,
        expo: 0
    }
    if(reqValue.greaterThan("1e6") == true){
       
        value.manti = reqValue.m.toFixed(2)
        value.expo = reqValue.e
        reqDisp.textContent = (value.manti.toString() + "e" + value.expo.toString())
    } else {
        reqDisp.textContent = reqValue.toFixed(2)
    }

}
function sciNotaWithX(reqDisp, reqValue){
    let value ={
        manti: 0,
        expo: 0
    }
    if(reqValue.greaterThan("1e6") == true){
       
        value.manti = reqValue.m.toFixed(2)
        value.expo = reqValue.e
        reqDisp.textContent = "X"+(value.manti.toString() + "e" + value.expo.toString())
    } else {
        reqDisp.textContent = "X"+reqValue.toFixed(2)
    }

}
function sciNotaWithPlus(reqDisp, reqValue){
    let value ={
        manti: 0,
        expo: 0
    }
    if(reqValue.greaterThan("1e6") == true){
       
        value.manti = reqValue.m.toFixed(2)
        value.expo = reqValue.e
        reqDisp.textContent = "+"+(value.manti.toString() + "e" + value.expo.toString())
    } else {
        reqDisp.textContent = "+"+reqValue.toFixed(2)
    }

}
//************************ */