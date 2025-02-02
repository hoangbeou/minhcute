function showLoveMessage() {
    const messages = [
        { message: "Anh yêu em nhiều lắm! 💖", img: "https://raw.githubusercontent.com/hoangbeou/minhbeo/main/minh1.jfif" },
        { message: "Em là điều tuyệt vời nhất trong cuộc đời anh! 😘", img: "https://raw.githubusercontent.com/hoangbeou/minhbeo/main/minh2.jfif" },
        { message: "Có em bên cạnh, ngày nào cũng là ngày hạnh phúc! 🌸", img: "https://raw.githubusercontent.com/hoangbeou/minhbeo/main/minh3.jfif" },
        { message: "Anh nhớ em mỗi giây mỗi phút! 🥰", img: "https://raw.githubusercontent.com/hoangbeou/minhbeo/main/minh4.jfif" },
        { message: "Em chính là ánh sáng trong cuộc đời anh! 💫", img: "https://raw.githubusercontent.com/hoangbeou/minhbeo/main/minh5.jfif" }
    ];

    // Chọn một tin nhắn và ảnh ngẫu nhiên
    const randomItem = messages[Math.floor(Math.random() * messages.length)];

    // Cập nhật tin nhắn và ảnh
    document.getElementById("message").innerText = randomItem.message;
    document.getElementById("loveImage").src = randomItem.img;

    // Thêm hiệu ứng thay đổi nền
    document.body.classList.add('change-background');

    // Quay lại trạng thái ban đầu sau 1 giây
    setTimeout(() => {
        document.body.classList.remove('change-background');
    }, 1000);
}
