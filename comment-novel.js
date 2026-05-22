/* =============================================
   COMMENT MOCK DATA – Bình luận truyện
   ============================================= */

const novelComments = [
  {
    id: 1,
    avatar: "https://i.pravatar.cc/150?img=1",
    username: "Aiko Shimizu",
    content: "Truyện hay quá, tôi đã đọc một mạch từ đầu đến cuối. Marigold đáng yêu vô cùng, mong tác giả ra thêm ngoại truyện!",
    chapTitle: null,
    time: "5 phút trước",
    likes: 42
  },
  {
    id: 2,
    avatar: "https://i.pravatar.cc/150?img=5",
    username: "Minh Anh",
    content: "Chương này twist quá đỉnh, không ngờ Cedric lại chọn cách đó để bảo vệ Marigold. Tác giả viết tâm lý nhân vật rất sâu sắc.",
    chapTitle: "Chương 175: Hạnh Phúc Chắc Chắn Sẽ Đến",
    time: "12 phút trước",
    likes: 38
  },
  {
    id: 3,
    avatar: "https://i.pravatar.cc/150?img=12",
    username: "Thanh Hằng",
    content: "Mình thích cách tác giả xây dựng thế giới fantasy, rất chi tiết và sống động. Hệ thống phép thuật cũng rất logic.",
    chapTitle: null,
    time: "30 phút trước",
    likes: 25
  },
  {
    id: 4,
    avatar: "https://i.pravatar.cc/150?img=8",
    username: "Đức Phúc",
    content: "Cảnh chiến đấu trong chương này được viết cực kỳ mãn nhãn! Mong chờ chương tiếp theo.",
    chapTitle: "Chương 170: Cuộc Chiến Cuối Cùng",
    time: "1 giờ trước",
    likes: 19
  },
  {
    id: 5,
    avatar: "https://i.pravatar.cc/150?img=15",
    username: "Yuki Tanaka",
    content: "Đây là light novel hay nhất mình từng đọc trên Hako. Cảm ơn nhóm dịch Aiko đã dịch rất tâm huyết ❤️",
    chapTitle: null,
    time: "2 giờ trước",
    likes: 56
  },
  {
    id: 6,
    avatar: "https://i.pravatar.cc/150?img=22",
    username: "Hoàng Long",
    content: "Chương này ngắn quá, đọc chưa đã đã hết rồi 😭 Mà mà cái plot twist cuối chương là sao vậy trời??",
    chapTitle: "Chương 168: Bí Mật Của Hoàng Gia",
    time: "3 giờ trước",
    likes: 31
  },
  {
    id: 7,
    avatar: "https://i.pravatar.cc/150?img=33",
    username: "Linh Chi",
    content: "Rating 4.9 là hoàn toàn xứng đáng. Truyện có cả romance, action, và mystery. Cốt truyện chặt chẽ, không bị loãng.",
    chapTitle: null,
    time: "5 giờ trước",
    likes: 44
  },
  {
    id: 8,
    avatar: "https://i.pravatar.cc/150?img=41",
    username: "Trần Văn Hùng",
    content: "Mình đọc bản gốc tiếng Hàn rồi, bản dịch tiếng Việt rất sát nghĩa và mượt mà. Kudos cho team dịch!",
    chapTitle: null,
    time: "8 giờ trước",
    likes: 27
  },
  {
    id: 9,
    avatar: "https://i.pravatar.cc/150?img=47",
    username: "Sakura Mei",
    content: "Cuối cùng cũng có người dịch truyện này! Mình chờ từ khi nó mới ra bên Hàn luôn á. Quá hạnh phúc 🎉",
    chapTitle: null,
    time: "12 giờ trước",
    likes: 63
  },
  {
    id: 10,
    avatar: "https://i.pravatar.cc/150?img=50",
    username: "Nguyễn Hải",
    content: "Chương này làm mình khóc thật sự. Cảnh chia tay giữa hai nhân vật chính quá xúc động. Tác giả giỏi quá.",
    chapTitle: "Chương 165: Lời Hứa Dưới Ánh Trăng",
    time: "1 ngày trước",
    likes: 72
  },
  {
    id: 11,
    avatar: "https://i.pravatar.cc/150?img=3",
    username: "Phương Thảo",
    content: "Art style của họa sĩ minh họa đẹp quá! Mỗi lần có illustration mới là mình screenshot liền.",
    chapTitle: null,
    time: "1 ngày trước",
    likes: 35
  },
  {
    id: 12,
    avatar: "https://i.pravatar.cc/150?img=18",
    username: "Khánh Duy",
    content: "Nhân vật phụ trong truyện này cũng được xây dựng rất tốt, không hề bị nhạt. Đặc biệt là nhân vật Gilbert.",
    chapTitle: "Chương 150: Sự Thật Về Gilbert",
    time: "2 ngày trước",
    likes: 29
  },
  {
    id: 13,
    avatar: "https://i.pravatar.cc/150?img=25",
    username: "Mai Linh",
    content: "Truyện này nên được chuyển thể thành anime sẽ cực kỳ hay. Hy vọng một ngày nào đó sẽ có studio nhận làm 🙏",
    chapTitle: null,
    time: "2 ngày trước",
    likes: 88
  },
  {
    id: 14,
    avatar: "https://i.pravatar.cc/150?img=36",
    username: "Quốc Bảo",
    content: "Mới bắt đầu đọc, đang ở chương 30 mà đã thấy cuốn lắm rồi. Cảm ơn các bạn recommend truyện này!",
    chapTitle: null,
    time: "3 ngày trước",
    likes: 15
  },
  {
    id: 15,
    avatar: "https://i.pravatar.cc/150?img=44",
    username: "Hương Giang",
    content: "Worldbuilding tuyệt vời. Hệ thống chính trị trong truyện rất phức tạp và thú vị, giống Game of Thrones phiên bản light novel vậy.",
    chapTitle: null,
    time: "4 ngày trước",
    likes: 41
  },
  {
    id: 16,
    avatar: "https://i.pravatar.cc/150?img=60",
    username: "Tuấn Kiệt",
    content: "Chương này có cảnh hài hước quá, đọc xong cười mãi không dừng được 😂😂 Tác giả viết tình huống hài rất tự nhiên.",
    chapTitle: "Chương 120: Ngày Hội Trường Học",
    time: "5 ngày trước",
    likes: 53
  },
  {
    id: 17,
    avatar: "https://i.pravatar.cc/150?img=7",
    username: "Thu Trang",
    content: "Đã đọc xong toàn bộ truyện. Kết thúc rất trọn vẹn và ý nghĩa. 10/10 sẽ đọc lại lần nữa!",
    chapTitle: null,
    time: "1 tuần trước",
    likes: 95
  },
  {
    id: 18,
    avatar: "https://i.pravatar.cc/150?img=29",
    username: "Văn Đức",
    content: "Cảm ơn Hako đã có truyện hay thế này. Mình đã giới thiệu cho cả nhóm bạn cùng đọc rồi.",
    chapTitle: null,
    time: "1 tuần trước",
    likes: 22
  }
];
