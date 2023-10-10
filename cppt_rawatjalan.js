//TAMBAH BARIS FUNCTION
document.addEventListener("DOMContentLoaded", function () {
    // Get a reference to the "Tambah Baris" button and the table body
    const addRowBtn = document.getElementById("addRowBtn");
    const tableBody = document.getElementById("tableBody");

    // Add an event listener to the button
    addRowBtn.addEventListener("click", function () {
        // Create a new row and cells
        const newRow = document.createElement("tr");
        const numCells = 7; // Number of cells in each row

        for (let i = 0; i < numCells; i++) {
            const cell = document.createElement("td");

            if (i === 0) {
                // For the first cell (index 0), use input type "datetime"
                const inputDatetime = document.createElement("input");
                inputDatetime.type = "datetime";
                inputDatetime.style.width = "90%";
                cell.appendChild(inputDatetime);
            } else if (i === numCells - 1) {
                // For the last cell (index numCells - 1), create a canvas
                const canvas = document.createElement("canvas");
                canvas.style.border="solid 2px";
                canvas.className = "signature-canvas";
                canvas.style.width = "100%";
                canvas.style.height = "105px";
                cell.appendChild(canvas);
            } else if (i === 1) {
                // For the second cell (index 1), create a select dropdown
                const select = document.createElement("select");
                select.className = "form-select";
                select.setAttribute("aria-label", "Default select example");
                const options = ["Dokter", "Lab", "Suster", "Kasir"];
                options.forEach((option, index) => {
                    const optionElement = document.createElement("option");
                    optionElement.value = index + 1;
                    optionElement.textContent = option;
                    if (index === 0) {
                        optionElement.selected = true;
                    }
                    select.appendChild(optionElement);
                });
                cell.appendChild(select);
            } else {
                // For other cells, use textarea
                const textarea = document.createElement("textarea");
                textarea.className = "form-control scrollable";
                cell.appendChild(textarea);
            }

            newRow.appendChild(cell);
        }

        // Append the new row to the table body
        tableBody.appendChild(newRow);
    });
});

//FUNCTION UNTUK TTD
// Assuming you have two signature pads with unique IDs: signature-pad-1 and signature-pad-2
const hapusButton = document.getElementById('hapus-button');
const saveButton = document.getElementById('save-button');
const savedSignatureImg = document.getElementById('saved-signature');

// Get the canvas elements by their unique IDs
const canvas1 = document.getElementById('signature-canvas-1');
const canvas2 = document.getElementById('signature-canvas-2');
const canvas3 = document.getElementById('signature-canvas-3');


// Initialize SignaturePad for each canvas
const signaturePad1 = new SignaturePad(canvas1, {
    backgroundColor: 'white',
    minWidth: 1.2,
    maxWidth: 1.2,
});

const signaturePad2 = new SignaturePad(canvas2, {
    backgroundColor: 'white',
    minWidth: 1.2,
    maxWidth: 1.2,
});

const signaturePad3 = new SignaturePad(canvas3, {
    backgroundColor: 'white',
    minWidth: 1.2,
    maxWidth: 1.2,
});

hapusButton.addEventListener('click', () => {
    // Clear the specific canvas when the "Hapus" button is clicked
    signaturePad1.clear();
    signaturePad2.clear();
    signaturePad3.clear();
    
    savedSignatureImg.style.display = 'none'; // Hide the saved signature when clearing
});

saveButton.addEventListener('click', () => {
    // Check which canvas is currently active (based on your UI logic)
    // For example, if you have radio buttons to select a canvas, you can check their states
    const canvasIsActive1 = true; // Replace with your logic to determine which canvas is active

    if (canvasIsActive1) {
        savedSignatureImg.style.display = 'block';
        savedSignatureImg.src = signaturePad1.toDataURL();
    } else {
        savedSignatureImg.style.display = 'block';
        savedSignatureImg.src = signaturePad2.toDataURL();
    }
});