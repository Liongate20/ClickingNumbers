var colorList = [
    {
        name: "red"
    },
    {
        name: "green"
    },
    {
        name: "blue"
    }
];
var elements = [];
const number = function (data) {
    var that = this;
    this.name = data.name;
    this.nm = 0;
    this.eleNM = document.createElement("div");
    this.eleNM.innerHTML = this.nm;
    this.eleNM.style.width = "200px";
    this.eleNM.style.height = "100px";
    this.eleNM.style.borderRadius = "10px";
    this.eleNM.style.fontSize = "18px";
    this.eleNM.style.textAlign = "center";
    this.eleNM.style.verticalAlign = "middle";
    this.eleNM.style.lineHeight = "90px";
    this.eleNM.style.backgroundColor=data.name;
    this.eleNM.style.color = "white";
    this.eleNM.addEventListener("click", function () {
        that.additionNM();
    });
    document.body.appendChild(this.eleNM);
};
number.prototype.additionNM = function () {
    this.nm = this.nm +1;
    this.eleNM.innerHTML = this.nm;
};
for (let ii = 0; ii < colorList.length; ii++) {
    elements.push(new number(colorList[ii]));
}
