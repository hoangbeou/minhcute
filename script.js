let currentIndex = 0; // Khai báo currentIndex để theo dõi thứ tự

function showLoveMessage() {
    const messages = [
        { message: "Em bé tức giận nè", img: "https://raw.githubusercontent.com/hoangbeou/minhcute/main/angry.jfif" },
        { message: "Em bé đánh giá nè 🌸", img: "https://raw.githubusercontent.com/hoangbeou/minhcute/main/danhgia.jfif" },
        { message: "Quá dễ thương 😘", img: "https://raw.githubusercontent.com/hoangbeou/minhcute/main/cute.jfif" },
        { message: "Cute vcl 🥰", img: "https://raw.githubusercontent.com/hoangbeou/minhcute/main/dethuong.jfif" },
        { message: "Meme em bé nè 💫", img: "https://raw.githubusercontent.com/hoangbeou/minhcute/main/meme.jfif" },
        { message: "Hết òi, Anh yêu vợ rất nhiều", img: "https://raw.githubusercontent.com/hoangbeou/minhcute/main/end.jfif" }  // Mục này không có ảnh, để img là rỗng
    ];

    // Cập nhật tin nhắn
    document.getElementById("message").innerText = messages[currentIndex].message;

    // Cập nhật ảnh nếu có
    if (messages[currentIndex].img !== "") {
        document.getElementById("loveImage").src = messages[currentIndex].img;
    } else {
        document.getElementById("loveImage").src = "";  // Nếu không có ảnh, xóa ảnh
    }

    // Thêm hiệu ứng thay đổi nền
    document.body.classList.add('change-background');

    // Quay lại trạng thái ban đầu sau 1 giây
    setTimeout(() => {
        document.body.classList.remove('change-background');
    }, 1000);

    // Tăng chỉ số để hiển thị tin nhắn và ảnh tiếp theo
    currentIndex++;

     if (currentIndex >= messages.length) {
        document.getElementById("message").innerText = "Cảm ơn em đã xem hết các hình ảnh và tin nhắn dễ thương!";
        document.getElementById("loveImage").src = "";  // Xóa ảnh cuối cùng nếu cần
        document.querySelector("button").style.display = "none"; // Ẩn nút sau khi đến ảnh cuối
    }
}
