"use strict";

const data = [
  {
    id: 1,
    title: "HỒNG BÀNG VĂN LANG",
    desc: `Theo hai bộ sử ký Đại Việt sử ký toàn thư (viết ở thế kỷ 15) và Đại Việt sử lược (viết ở thế kỷ 13), thì nhà nước Âu Lạc được Thục Phán (thủ lĩnh bộ tộc Âu Việt) thành lập vào năm 258 TCN sau khi đánh bại vị vua Hùng cuối cùng của nước Văn Lang, ông lên ngôi và lấy niên hiệu là An Dương Vương.
An Dương Vương sát nhập lãnh thổ của Văn Lang và lãnh thổ của bộ tộc mình (Âu Việt) và hình thành nên một nhà nước mới là Âu Lạc (kết hợp giữa người Âu Việt và người Lạc Việt)
Lãnh thổ Âu Lạc gồm lãnh cũ của bộ tộc Âu Việt ở phía bắc, mà ngày nay là một phần phía nam tỉnh Quảng Tây (Trung Quốc) và lãnh thổ của Văn Lang ở miền bắc Việt Nam. Âu Lạc có ranh giới phía bắc là sông Tả Giang (Quảng Tây) đến phía nam là dãy núi Hoành Sơn ở Hà Tĩnh hiện nay.`,
    time: "258 TCN",
  },
  {
    id: 2,
    title: "AN DƯƠNG VƯƠNG",
    desc: `Theo hai bộ sử ký Đại Việt sử ký toàn thư (viết ở thế kỷ 15) và Đại Việt sử lược (viết ở thế kỷ 13), thì nhà nước Âu Lạc được Thục Phán (thủ lĩnh bộ tộc Âu Việt) thành lập vào năm 258 TCN sau khi đánh bại vị vua Hùng cuối cùng của nước Văn Lang, ông lên ngôi và lấy niên hiệu là An Dương Vương.
An Dương Vương sát nhập lãnh thổ của Văn Lang và lãnh thổ của bộ tộc mình (Âu Việt) và hình thành nên một nhà nước mới là Âu Lạc (kết hợp giữa người Âu Việt và người Lạc Việt)
Lãnh thổ Âu Lạc gồm lãnh cũ của bộ tộc Âu Việt ở phía bắc, mà ngày nay là một phần phía nam tỉnh Quảng Tây (Trung Quốc) và lãnh thổ của Văn Lang ở miền bắc Việt Nam. Âu Lạc có ranh giới phía bắc là sông Tả Giang (Quảng Tây) đến phía nam là dãy núi Hoành Sơn ở Hà Tĩnh hiện nay.`,
    time: "258 - 179 TCN",
  },
  {
    id: 3,
    title: " NHÀ TRIỆU",
    desc: `Theo hai bộ sử ký Đại Việt sử ký toàn thư (viết ở thế kỷ 15) và Đại Việt sử lược (viết ở thế kỷ 13), thì nhà nước Âu Lạc được Thục Phán (thủ lĩnh bộ tộc Âu Việt) thành lập vào năm 258 TCN sau khi đánh bại vị vua Hùng cuối cùng của nước Văn Lang, ông lên ngôi và lấy niên hiệu là An Dương Vương.
An Dương Vương sát nhập lãnh thổ của Văn Lang và lãnh thổ của bộ tộc mình (Âu Việt) và hình thành nên một nhà nước mới là Âu Lạc (kết hợp giữa người Âu Việt và người Lạc Việt)
Lãnh thổ Âu Lạc gồm lãnh cũ của bộ tộc Âu Việt ở phía bắc, mà ngày nay là một phần phía nam tỉnh Quảng Tây (Trung Quốc) và lãnh thổ của Văn Lang ở miền bắc Việt Nam. Âu Lạc có ranh giới phía bắc là sông Tả Giang (Quảng Tây) đến phía nam là dãy núi Hoành Sơn ở Hà Tĩnh hiện nay.`,
    time: "111 TCN - 905",
  },
  {
    id: 4,
    title: "BẮC THUỘC",
    desc: `Theo hai bộ sử ký Đại Việt sử ký toàn thư (viết ở thế kỷ 15) và Đại Việt sử lược (viết ở thế kỷ 13), thì nhà nước Âu Lạc được Thục Phán (thủ lĩnh bộ tộc Âu Việt) thành lập vào năm 258 TCN sau khi đánh bại vị vua Hùng cuối cùng của nước Văn Lang, ông lên ngôi và lấy niên hiệu là An Dương Vương.
An Dương Vương sát nhập lãnh thổ của Văn Lang và lãnh thổ của bộ tộc mình (Âu Việt) và hình thành nên một nhà nước mới là Âu Lạc (kết hợp giữa người Âu Việt và người Lạc Việt)
Lãnh thổ Âu Lạc gồm lãnh cũ của bộ tộc Âu Việt ở phía bắc, mà ngày nay là một phần phía nam tỉnh Quảng Tây (Trung Quốc) và lãnh thổ của Văn Lang ở miền bắc Việt Nam. Âu Lạc có ranh giới phía bắc là sông Tả Giang (Quảng Tây) đến phía nam là dãy núi Hoành Sơn ở Hà Tĩnh hiện nay.`,
    time: "111 TCN - 905",
  },
  {
    id: 5,
    title: "NHÀ NGÔ",
    desc: `Theo hai bộ sử ký Đại Việt sử ký toàn thư (viết ở thế kỷ 15) và Đại Việt sử lược (viết ở thế kỷ 13), thì nhà nước Âu Lạc được Thục Phán (thủ lĩnh bộ tộc Âu Việt) thành lập vào năm 258 TCN sau khi đánh bại vị vua Hùng cuối cùng của nước Văn Lang, ông lên ngôi và lấy niên hiệu là An Dương Vương.
An Dương Vương sát nhập lãnh thổ của Văn Lang và lãnh thổ của bộ tộc mình (Âu Việt) và hình thành nên một nhà nước mới là Âu Lạc (kết hợp giữa người Âu Việt và người Lạc Việt)
Lãnh thổ Âu Lạc gồm lãnh cũ của bộ tộc Âu Việt ở phía bắc, mà ngày nay là một phần phía nam tỉnh Quảng Tây (Trung Quốc) và lãnh thổ của Văn Lang ở miền bắc Việt Nam. Âu Lạc có ranh giới phía bắc là sông Tả Giang (Quảng Tây) đến phía nam là dãy núi Hoành Sơn ở Hà Tĩnh hiện nay.`,
    time: "111 TCN - 905",
  },
  {
    id: 6,
    title: "NHÀ ĐINH",
    desc: `Theo hai bộ sử ký Đại Việt sử ký toàn thư (viết ở thế kỷ 15) và Đại Việt sử lược (viết ở thế kỷ 13), thì nhà nước Âu Lạc được Thục Phán (thủ lĩnh bộ tộc Âu Việt) thành lập vào năm 258 TCN sau khi đánh bại vị vua Hùng cuối cùng của nước Văn Lang, ông lên ngôi và lấy niên hiệu là An Dương Vương.
An Dương Vương sát nhập lãnh thổ của Văn Lang và lãnh thổ của bộ tộc mình (Âu Việt) và hình thành nên một nhà nước mới là Âu Lạc (kết hợp giữa người Âu Việt và người Lạc Việt)
Lãnh thổ Âu Lạc gồm lãnh cũ của bộ tộc Âu Việt ở phía bắc, mà ngày nay là một phần phía nam tỉnh Quảng Tây (Trung Quốc) và lãnh thổ của Văn Lang ở miền bắc Việt Nam. Âu Lạc có ranh giới phía bắc là sông Tả Giang (Quảng Tây) đến phía nam là dãy núi Hoành Sơn ở Hà Tĩnh hiện nay.`,
    time: "111 TCN - 905",
  },
  {
    id: 7,
    title: "NHÀ LÝ",
    desc: `Theo hai bộ sử ký Đại Việt sử ký toàn thư (viết ở thế kỷ 15) và Đại Việt sử lược (viết ở thế kỷ 13), thì nhà nước Âu Lạc được Thục Phán (thủ lĩnh bộ tộc Âu Việt) thành lập vào năm 258 TCN sau khi đánh bại vị vua Hùng cuối cùng của nước Văn Lang, ông lên ngôi và lấy niên hiệu là An Dương Vương.
An Dương Vương sát nhập lãnh thổ của Văn Lang và lãnh thổ của bộ tộc mình (Âu Việt) và hình thành nên một nhà nước mới là Âu Lạc (kết hợp giữa người Âu Việt và người Lạc Việt)
Lãnh thổ Âu Lạc gồm lãnh cũ của bộ tộc Âu Việt ở phía bắc, mà ngày nay là một phần phía nam tỉnh Quảng Tây (Trung Quốc) và lãnh thổ của Văn Lang ở miền bắc Việt Nam. Âu Lạc có ranh giới phía bắc là sông Tả Giang (Quảng Tây) đến phía nam là dãy núi Hoành Sơn ở Hà Tĩnh hiện nay.`,
    time: "111 TCN - 905",
  },
  {
    id: 8,
    title: "NHÀ TRẦN",
    desc: `Theo hai bộ sử ký Đại Việt sử ký toàn thư (viết ở thế kỷ 15) và Đại Việt sử lược (viết ở thế kỷ 13), thì nhà nước Âu Lạc được Thục Phán (thủ lĩnh bộ tộc Âu Việt) thành lập vào năm 258 TCN sau khi đánh bại vị vua Hùng cuối cùng của nước Văn Lang, ông lên ngôi và lấy niên hiệu là An Dương Vương.
An Dương Vương sát nhập lãnh thổ của Văn Lang và lãnh thổ của bộ tộc mình (Âu Việt) và hình thành nên một nhà nước mới là Âu Lạc (kết hợp giữa người Âu Việt và người Lạc Việt)
Lãnh thổ Âu Lạc gồm lãnh cũ của bộ tộc Âu Việt ở phía bắc, mà ngày nay là một phần phía nam tỉnh Quảng Tây (Trung Quốc) và lãnh thổ của Văn Lang ở miền bắc Việt Nam. Âu Lạc có ranh giới phía bắc là sông Tả Giang (Quảng Tây) đến phía nam là dãy núi Hoành Sơn ở Hà Tĩnh hiện nay.`,
    time: "111 TCN - 905",
  },
  {
    id: 9,
    title: "NHÀ HỒ VÀ HẬU TRẦN",
    desc: `Theo hai bộ sử ký Đại Việt sử ký toàn thư (viết ở thế kỷ 15) và Đại Việt sử lược (viết ở thế kỷ 13), thì nhà nước Âu Lạc được Thục Phán (thủ lĩnh bộ tộc Âu Việt) thành lập vào năm 258 TCN sau khi đánh bại vị vua Hùng cuối cùng của nước Văn Lang, ông lên ngôi và lấy niên hiệu là An Dương Vương.
An Dương Vương sát nhập lãnh thổ của Văn Lang và lãnh thổ của bộ tộc mình (Âu Việt) và hình thành nên một nhà nước mới là Âu Lạc (kết hợp giữa người Âu Việt và người Lạc Việt)
Lãnh thổ Âu Lạc gồm lãnh cũ của bộ tộc Âu Việt ở phía bắc, mà ngày nay là một phần phía nam tỉnh Quảng Tây (Trung Quốc) và lãnh thổ của Văn Lang ở miền bắc Việt Nam. Âu Lạc có ranh giới phía bắc là sông Tả Giang (Quảng Tây) đến phía nam là dãy núi Hoành Sơn ở Hà Tĩnh hiện nay.`,
    time: "111 TCN - 905",
  },
  {
    id: 10,
    title: "MINH THUỘC",
    desc: `Theo hai bộ sử ký Đại Việt sử ký toàn thư (viết ở thế kỷ 15) và Đại Việt sử lược (viết ở thế kỷ 13), thì nhà nước Âu Lạc được Thục Phán (thủ lĩnh bộ tộc Âu Việt) thành lập vào năm 258 TCN sau khi đánh bại vị vua Hùng cuối cùng của nước Văn Lang, ông lên ngôi và lấy niên hiệu là An Dương Vương.
An Dương Vương sát nhập lãnh thổ của Văn Lang và lãnh thổ của bộ tộc mình (Âu Việt) và hình thành nên một nhà nước mới là Âu Lạc (kết hợp giữa người Âu Việt và người Lạc Việt)
Lãnh thổ Âu Lạc gồm lãnh cũ của bộ tộc Âu Việt ở phía bắc, mà ngày nay là một phần phía nam tỉnh Quảng Tây (Trung Quốc) và lãnh thổ của Văn Lang ở miền bắc Việt Nam. Âu Lạc có ranh giới phía bắc là sông Tả Giang (Quảng Tây) đến phía nam là dãy núi Hoành Sơn ở Hà Tĩnh hiện nay.`,
    time: "111 TCN - 905",
  },
  {
    id: 11,
    title: "NHÀ HẬU LÊ",
    desc: `Theo hai bộ sử ký Đại Việt sử ký toàn thư (viết ở thế kỷ 15) và Đại Việt sử lược (viết ở thế kỷ 13), thì nhà nước Âu Lạc được Thục Phán (thủ lĩnh bộ tộc Âu Việt) thành lập vào năm 258 TCN sau khi đánh bại vị vua Hùng cuối cùng của nước Văn Lang, ông lên ngôi và lấy niên hiệu là An Dương Vương.
An Dương Vương sát nhập lãnh thổ của Văn Lang và lãnh thổ của bộ tộc mình (Âu Việt) và hình thành nên một nhà nước mới là Âu Lạc (kết hợp giữa người Âu Việt và người Lạc Việt)
Lãnh thổ Âu Lạc gồm lãnh cũ của bộ tộc Âu Việt ở phía bắc, mà ngày nay là một phần phía nam tỉnh Quảng Tây (Trung Quốc) và lãnh thổ của Văn Lang ở miền bắc Việt Nam. Âu Lạc có ranh giới phía bắc là sông Tả Giang (Quảng Tây) đến phía nam là dãy núi Hoành Sơn ở Hà Tĩnh hiện nay.`,
    time: "111 TCN - 905",
  },
  {
    id: 12,
    title: "NHÀ NGUYỄN",
    desc: `Theo hai bộ sử ký Đại Việt sử ký toàn thư (viết ở thế kỷ 15) và Đại Việt sử lược (viết ở thế kỷ 13), thì nhà nước Âu Lạc được Thục Phán (thủ lĩnh bộ tộc Âu Việt) thành lập vào năm 258 TCN sau khi đánh bại vị vua Hùng cuối cùng của nước Văn Lang, ông lên ngôi và lấy niên hiệu là An Dương Vương.
An Dương Vương sát nhập lãnh thổ của Văn Lang và lãnh thổ của bộ tộc mình (Âu Việt) và hình thành nên một nhà nước mới là Âu Lạc (kết hợp giữa người Âu Việt và người Lạc Việt)
Lãnh thổ Âu Lạc gồm lãnh cũ của bộ tộc Âu Việt ở phía bắc, mà ngày nay là một phần phía nam tỉnh Quảng Tây (Trung Quốc) và lãnh thổ của Văn Lang ở miền bắc Việt Nam. Âu Lạc có ranh giới phía bắc là sông Tả Giang (Quảng Tây) đến phía nam là dãy núi Hoành Sơn ở Hà Tĩnh hiện nay.`,
    time: "111 TCN - 905",
  },
  {
    id: 13,
    title: "PHÁP THUỘC",
    desc: `Theo hai bộ sử ký Đại Việt sử ký toàn thư (viết ở thế kỷ 15) và Đại Việt sử lược (viết ở thế kỷ 13), thì nhà nước Âu Lạc được Thục Phán (thủ lĩnh bộ tộc Âu Việt) thành lập vào năm 258 TCN sau khi đánh bại vị vua Hùng cuối cùng của nước Văn Lang, ông lên ngôi và lấy niên hiệu là An Dương Vương.
An Dương Vương sát nhập lãnh thổ của Văn Lang và lãnh thổ của bộ tộc mình (Âu Việt) và hình thành nên một nhà nước mới là Âu Lạc (kết hợp giữa người Âu Việt và người Lạc Việt)
Lãnh thổ Âu Lạc gồm lãnh cũ của bộ tộc Âu Việt ở phía bắc, mà ngày nay là một phần phía nam tỉnh Quảng Tây (Trung Quốc) và lãnh thổ của Văn Lang ở miền bắc Việt Nam. Âu Lạc có ranh giới phía bắc là sông Tả Giang (Quảng Tây) đến phía nam là dãy núi Hoành Sơn ở Hà Tĩnh hiện nay.`,
    time: "111 TCN - 905",
  },
  {
    id: 14,
    title: "KHÁNG CHIẾN CHỐNG MỸ",
    desc: `Theo hai bộ sử ký Đại Việt sử ký toàn thư (viết ở thế kỷ 15) và Đại Việt sử lược (viết ở thế kỷ 13), thì nhà nước Âu Lạc được Thục Phán (thủ lĩnh bộ tộc Âu Việt) thành lập vào năm 258 TCN sau khi đánh bại vị vua Hùng cuối cùng của nước Văn Lang, ông lên ngôi và lấy niên hiệu là An Dương Vương.
An Dương Vương sát nhập lãnh thổ của Văn Lang và lãnh thổ của bộ tộc mình (Âu Việt) và hình thành nên một nhà nước mới là Âu Lạc (kết hợp giữa người Âu Việt và người Lạc Việt)
Lãnh thổ Âu Lạc gồm lãnh cũ của bộ tộc Âu Việt ở phía bắc, mà ngày nay là một phần phía nam tỉnh Quảng Tây (Trung Quốc) và lãnh thổ của Văn Lang ở miền bắc Việt Nam. Âu Lạc có ranh giới phía bắc là sông Tả Giang (Quảng Tây) đến phía nam là dãy núi Hoành Sơn ở Hà Tĩnh hiện nay.`,
    time: "111 TCN - 905",
  },
  {
    id: 15,
    title: "CHXHCN VIỆT NAM",
    desc: `Theo hai bộ sử ký Đại Việt sử ký toàn thư (viết ở thế kỷ 15) và Đại Việt sử lược (viết ở thế kỷ 13), thì nhà nước Âu Lạc được Thục Phán (thủ lĩnh bộ tộc Âu Việt) thành lập vào năm 258 TCN sau khi đánh bại vị vua Hùng cuối cùng của nước Văn Lang, ông lên ngôi và lấy niên hiệu là An Dương Vương.
An Dương Vương sát nhập lãnh thổ của Văn Lang và lãnh thổ của bộ tộc mình (Âu Việt) và hình thành nên một nhà nước mới là Âu Lạc (kết hợp giữa người Âu Việt và người Lạc Việt)
Lãnh thổ Âu Lạc gồm lãnh cũ của bộ tộc Âu Việt ở phía bắc, mà ngày nay là một phần phía nam tỉnh Quảng Tây (Trung Quốc) và lãnh thổ của Văn Lang ở miền bắc Việt Nam. Âu Lạc có ranh giới phía bắc là sông Tả Giang (Quảng Tây) đến phía nam là dãy núi Hoành Sơn ở Hà Tĩnh hiện nay.`,
    time: "111 TCN - 905",
  },
];

// render modal

function renderToDo() {
  let content = "";
  //Duyệt mảng từ phải qua trái (bắt đầu ở phần tử cuối mảng)
  content = data.reduceRight((tdContent, item, index) => {
    //tdContent = tdContent(noi dung cũ) + `nội dung mới`;
    tdContent += `
          <div id="modal${index}" class="customModal hidden">
            <button id="close-modal${index}" class="close-modal">&times;</button>
            <h1>${item.title}</h1>
            <img src="./images/${item.id}.png" alt="logo">
            <p>${item.desc}</p>
          </div>
      `;
    return tdContent;
  }, "");
  return content;
}
document.querySelector("body").innerHTML += renderToDo();

const getEl = (id) => {
  return document.getElementById(id);
};
const modals = document.querySelectorAll(".customModal");
const btnCloseModal = document.querySelectorAll(".close-modal");
// const btnsOpenModal = document.querySelectorAll(".show-modal");
const milestones = document.querySelectorAll(".milestone");
const overlay = document.querySelector(".overlay");

const closeModal = () => {
  modals.forEach((modal) => modal.classList.add("hidden"));
  overlay.classList.add("hidden");
};

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener("click", function () {
//     getEl(`modal${i}`).classList.remove("hidden");
//     overlay.classList.remove("hidden");
//   });

for (let i = 0; i < btnCloseModal.length; i++)
  btnCloseModal[i].addEventListener("click", closeModal);

for (let i = 0; i < milestones.length; i++)
  milestones[i].addEventListener("click", function () {
    getEl(`modal${i}`).classList.remove("hidden");
    overlay.classList.remove("hidden");
  });

overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeModal();
  }
});
