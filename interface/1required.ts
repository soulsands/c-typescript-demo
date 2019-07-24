interface LabelledValue {
  label?: string;
}

function printLabel(labelledObj: LabelledValue) {
  console.log(labelledObj.label);
}

let myObj = { size1: 10, label: "Size 10 Object" };
printLabel(myObj);
