function analyzeCode() {
    const code = document.getElementById("codeInput").value;
    const output = document.getElementById("output");

    if (code.trim() === "") {
        output.innerHTML = "⚠️ Please enter some code.";
        return;
    }

    let messages = [];

    // -------- Language Detection --------
    let language = "Unknown";

    if (
        code.includes("#include") ||
        code.includes("cout") ||
        code.includes("cin") ||
        code.includes("int main") ||
        code.includes("using namespace std")
    ) {
        language = "C/C++";
    } 
    else if (
        code.includes("public class") ||
        code.includes("System.out.println")
    ) {
        language = "Java";
    } 
    else if (
        code.includes("def ") ||
        code.includes("print(")
    ) {
        language = "Python";
    }

    messages.push({ text: "Detected Language: " + language, type: "info" });

    // -------- Line Analysis --------
    let lines = code.split("\n");
    let emptyLines = lines.filter(line => line.trim() === "").length;

    if (emptyLines > 2) {
        messages.push({ text: "Too many empty lines.", type: "error" });
    }

    if (lines.length > 20) {
        messages.push({ text: "Code is too long.", type: "warning" });
    }

    // -------- Variable Naming --------
    if (code.includes("x") || code.includes("temp")) {
        messages.push({ text: "Use better variable names.", type: "suggestion" });
    }

    // -------- Time Complexity --------
    let loopCount = (code.match(/for|while/g) || []).length;

    if (loopCount === 1) {
        messages.push({ text: "Estimated Time Complexity: O(n)", type: "info" });
    } 
    else if (loopCount === 2) {
        messages.push({ text: "Estimated Time Complexity: O(n²)", type: "info" });
    } 
    else if (loopCount >= 3) {
        messages.push({ text: "Estimated Time Complexity: O(n³) or more", type: "info" });
    } 
    else {
        messages.push({ text: "Time Complexity: Unable to detect", type: "info" });
    }

    // -------- Final Output --------
    output.innerHTML = "";

    messages.forEach(msg => {
        let div = document.createElement("div");
        div.classList.add("message", msg.type);
        div.innerText = msg.text;
        output.appendChild(div);
    });
}