function launchKrathong() {
    let wishText = document.getElementById("wishInput").value;
    if (wishText.trim() === "") {
        alert("กรุณากรอกคำอวยพรก่อนลอยกระทง!");
        return;
    }

    // แสดงป๊อปอัพ
    document.getElementById("popup").style.display = "block";

    // สร้างกระทงในแม่น้ำ
    let krathong = document.createElement("img");
    krathong.src = "krathong.png";
    krathong.classList.add("krathong");
    krathong.style.top = Math.random() * 200 + "px";
    document.getElementById("river").appendChild(krathong);
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}
