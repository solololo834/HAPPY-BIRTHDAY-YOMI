let posisiA = 0;
let posisiB = 0;

function atas() {
  posisiB -= 10
  document.getElementById("jojo").style.top = posisiB + "px"
}

function kanan() {
  posisiA-= 10
  document.getElementById("jojo").style.right = posisiA + "px"
}

function kiri() {
  posisiA+= 10
  document.getElementById("jojo").style.right = posisiA + "px"
}

function bawah() {
  posisiB += 10
  console.log(posisiB)
  document.getElementById("jojo").style.top =  posisiB + "px"
}

function con() {
  document.getElementById("confetti").hidden = false;
  document.getElementById("yomi2").hidden = false;
  
 document.getElementById("atas").style.top = "450px";
 
 document.getElementById("kanan").style.top = "450px";
 
 document.getElementById("kiri").style.top = "430px";
 
 document.getElementById("bawah").style.top = "390px";
 
document.getElementById("HBDM").hidden = false;
 
 document.getElementById("h").innerText = "HAPPY BIRTHDAY YOMI!!"
}


function checkCode() {
    const correctCode = "6190";
    const inputCode = document.getElementById('codeInput').value;
    const errorMessage = document.getElementById('errorMessage');
    
    if (inputCode === correctCode) {
        // Jika kode benar, sembunyikan LOCK
        document.getElementById('LOCK').style.display = 'none';
    } else {
        // Jika kode salah, tampilkan pesan error
        errorMessage.style.display = 'block';
        document.getElementById('codeInput').value = ''; // Kosongkan input
        document.getElementById('codeInput').focus(); // Fokus kembali ke input
    }
}

// Tambahkan event listener untuk tombol Enter
document.getElementById('codeInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        checkCode();
    }
});

// Optional: Sembunyikan pesan error saat user mulai mengetik
document.getElementById('codeInput').addEventListener('input', function() {
    document.getElementById('errorMessage').style.display = 'none';
});

// Untuk memastikan LOCK tetap menutupi saat halaman dimuat
window.onload = function() {
    document.getElementById('LOCK').style.display = 'flex';}
