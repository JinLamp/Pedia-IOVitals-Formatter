
function toggleMode() {
  document.body.classList.toggle("light");
}

function generateOutput() {
  const oral = +document.getElementById('oral').value || 0;
  const ivf = +document.getElementById('ivf').value || 0;
  const uo = +document.getElementById('uo').value || 0;
  const totalOutput = +document.getElementById('totalOutput').value || uo;
  const weight = +document.getElementById('weight').value || 1;
  const hours = +document.getElementById('hours').value || 1;
  const bp = document.getElementById('bp').value;
  const hr = document.getElementById('hr').value;
  const rr = document.getElementById('rr').value;
  const temp = document.getElementById('temp').value;
  const spo2 = document.getElementById('spo2').value;

  const totalInput = oral + ivf;
  const fluidBalance = totalInput - totalOutput;
  const urineOutputRate = (uo / weight / hours).toFixed(2);

  const output = `Input & Output: ${totalInput} ml vs ${totalOutput} ml
Fluid balance: ${fluidBalance} ml
Urine output of ${urineOutputRate} cc/kg/hr in ${hours} hours

Oral: ${oral}
IVF: ${ivf}
Total Input: ${totalInput}

UO: ${uo}
Total Output: ${totalOutput}
Fluid balance: ${fluidBalance}
Urine output of ${urineOutputRate} cc/kg/hr in ${hours} hours

O> Asleep, comfortable, not in distress
BP ${bp} mmHg, latest ${bp}
HR ${hr} bpm, latest of ${hr} bpm
RR ${rr} cpm, latest of ${rr} cpm
Temperature ${temp}
O2 saturation ${spo2} at room air`;

  document.getElementById("outputText").value = output;
}

function copyToClipboard() {
  const textArea = document.getElementById("outputText");
  textArea.select();
  textArea.setSelectionRange(0, 99999);
  document.execCommand("copy");
}

function clearFields() {
  const ids = ["oral", "ivf", "uo", "totalOutput", "weight", "hours", "bp", "hr", "rr", "temp", "spo2", "outputText"];
  ids.forEach(id => document.getElementById(id).value = "");
}
