/* =============================================
   REVIEW MOCK DATA – Đánh giá truyện
   ============================================= */

const novelReviews = [
  {
    id: 1,
    avatar: "https://i.pravatar.cc/150?img=10",
    username: "Sakura Hana",
    content: "Một trong những light novel hay nhất mình từng đọc. Cốt truyện vững chắc, nhân vật được xây dựng sâu sắc. Mối quan hệ giữa Marigold và Cedric phát triển rất tự nhiên, không gượng ép. Worldbuilding chi tiết, hệ thống phép thuật logic. Bản dịch tiếng Việt cũng rất mượt mà, sát nghĩa gốc. Đặc biệt từ arc 3 trở đi, truyện trở nên cực kỳ cuốn hút. Điểm trừ duy nhất là một vài chương giữa truyện hơi kéo dài, nhưng tổng thể vẫn xứng đáng 5 sao.",
    rate: 5,
    time: "2 giờ trước",
    likes: 127
  },
  {
    id: 2,
    avatar: "https://i.pravatar.cc/150?img=32",
    username: "Minh Quân",
    content: "Truyện rất hay, cốt truyện hấp dẫn và lôi cuốn. Tuy nhiên mình cảm thấy phần giữa truyện hơi bị kéo dài, có vài arc filler không cần thiết. Nhưng bù lại, phần climax và ending rất trọn vẹn. Tác giả rất giỏi trong việc foreshadowing, đọc lại lần 2 mới nhận ra nhiều chi tiết nhỏ đã được cài sẵn từ đầu. Recommend cho ai thích thể loại fantasy romance.",
    rate: 4,
    time: "5 giờ trước",
    likes: 89
  },
  {
    id: 3,
    avatar: "https://i.pravatar.cc/150?img=20",
    username: "Hồng Nhung",
    content: "Đây là tác phẩm đầu tiên mình đọc của tác giả Verbena và phải nói là ấn tượng không thể tả nổi. Cách xây dựng tâm lý nhân vật rất chi tiết, mỗi nhân vật đều có động cơ và câu chuyện riêng. Phần romance không bị quá sến mà rất ngọt ngào và chân thật. 5/5 không cần suy nghĩ.",
    rate: 5,
    time: "1 ngày trước",
    likes: 203
  },
  {
    id: 4,
    avatar: "https://i.pravatar.cc/150?img=55",
    username: "Trọng Đại",
    content: "Truyện ổn, không quá xuất sắc nhưng cũng không tệ. Mình thích phần action và hệ thống chính trị trong truyện, nhưng phần romance mình cảm thấy hơi predictable. Nhân vật phụ Gilbert là highlight của truyện với mình. Nhìn chung là đáng đọc nếu bạn thích thể loại isekai fantasy.",
    rate: 3,
    time: "2 ngày trước",
    likes: 34
  },
  {
    id: 5,
    avatar: "https://i.pravatar.cc/150?img=16",
    username: "Thùy Linh",
    content: "Mình đã đọc rất nhiều light novel nhưng truyện này thực sự nổi bật. Tác giả có cách kể chuyện rất cuốn hút, mỗi chapter đều kết thúc bằng một cliffhanger khiến mình không thể dừng lại. Illustrations cũng rất đẹp, match hoàn hảo với nội dung. Nhóm dịch Aiko dịch tuyệt vời. Xứng đáng rating cao!",
    rate: 5,
    time: "3 ngày trước",
    likes: 156
  },
  {
    id: 6,
    avatar: "https://i.pravatar.cc/150?img=42",
    username: "Quốc Anh",
    content: "Cốt truyện hay nhưng pacing có vấn đề ở một số arc. Arc 2 quá chậm trong khi arc 4 lại quá nhanh. Mình ước tác giả phân bổ đều hơn. Tuy vậy, character development rất tốt và ending satisfying. Nếu bạn đủ kiên nhẫn vượt qua phần giữa thì phần sau sẽ rất xứng đáng.",
    rate: 4,
    time: "4 ngày trước",
    likes: 67
  },
  {
    id: 7,
    avatar: "https://i.pravatar.cc/150?img=9",
    username: "Ngọc Trâm",
    content: "Perfect! Không có gì để chê. Từ plot, character, worldbuilding đến art đều xuất sắc. Mình đã recommend truyện này cho tất cả bạn bè và ai cũng thích. Đây chính là tiêu chuẩn vàng cho light novel thể loại fantasy romance. Cảm ơn tác giả và nhóm dịch! ❤️",
    rate: 5,
    time: "5 ngày trước",
    likes: 241
  },
  {
    id: 8,
    avatar: "https://i.pravatar.cc/150?img=38",
    username: "Đình Khoa",
    content: "Truyện khá hay, đặc biệt là phần worldbuilding và hệ thống phép thuật. Tuy nhiên mình không thích lắm cách tác giả handle một số conflict, cảm giác hơi dễ dàng quá. Nhân vật chính đôi lúc hơi Mary Sue. Nhưng nhìn chung vẫn là một tác phẩm đáng đọc, đặc biệt nếu bạn thích romance.",
    rate: 3,
    time: "1 tuần trước",
    likes: 28
  },
  {
    id: 9,
    avatar: "https://i.pravatar.cc/150?img=24",
    username: "Phương Anh",
    content: "Mình bắt đầu đọc vì bìa đẹp, ở lại vì cốt truyện quá hay. Đặc biệt thích cách tác giả xây dựng mystery xung quanh quá khứ của Cedric. Mỗi lần một bí mật được hé lộ là mình lại 'ồ' một cái. Bản dịch cũng rất chất lượng, đọc mượt không hề bị cộm.",
    rate: 5,
    time: "1 tuần trước",
    likes: 112
  },
  {
    id: 10,
    avatar: "https://i.pravatar.cc/150?img=52",
    username: "Văn Toàn",
    content: "Truyện được đánh giá hơi cao so với thực tế theo ý mình. Plot có nhiều lỗ hổng nếu suy nghĩ kỹ, và một số tình huống quá trùng hợp. Tuy nhiên nếu đọc để giải trí thì vẫn rất OK. Điểm cộng lớn là romance rất ngọt và illustrations đẹp.",
    rate: 3,
    time: "2 tuần trước",
    likes: 19
  },
  {
    id: 11,
    avatar: "https://i.pravatar.cc/150?img=14",
    username: "Thanh Mai",
    content: "Tuyệt phẩm! Mình đã đọc đi đọc lại 3 lần và lần nào cũng phát hiện ra chi tiết mới. Tác giả cài cắm rất khéo léo. Phần ending khiến mình khóc cả buổi tối. Đây chắc chắn là top 3 LN hay nhất mình từng đọc. Ai chưa đọc thì nên bắt đầu ngay!",
    rate: 5,
    time: "2 tuần trước",
    likes: 178
  },
  {
    id: 12,
    avatar: "https://i.pravatar.cc/150?img=48",
    username: "Hữu Nghĩa",
    content: "Mình đánh giá 4 sao vì truyện hay nhưng có thể tốt hơn. Phần đầu truyện rất mạnh, nhưng arc giữa bị loãng. May mắn là phần cuối lấy lại phong độ. Character development của Marigold từ một cô gái nhút nhát thành một người mạnh mẽ rất inspiring. Recommend đọc.",
    rate: 4,
    time: "3 tuần trước",
    likes: 53
  }
];
