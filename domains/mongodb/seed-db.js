
const SeedDB = {
  user: {
    email: "admin@invitation.com",
    username: "admin",
    password: "$2b$10$VhmfGtzS9/IZPQuLQhmXkeTZmXrHYjIV2HCRfsOEp66Yk/OJiwow2", //123qwe
    password_confirm: "$2b$10$VhmfGtzS9/IZPQuLQhmXkeTZmXrHYjIV2HCRfsOEp66Yk/OJiwow2",
    role: "admin"
  },
  dataConfig: {
    male: {
      name: "Nguyễn Văn Thiện",
      parent: {
        father: "Nguyễn Văn Thắng",
        mother: "Hoàng Thị Thúy"
      },
      location: {
        text: "xóm 9 - Hồi Ninh - Kim Sơn - Ninh Bình",
        map: "https://goo.gl/maps/azThEiDLX1kS66ov6"
      },
      time_start: {
        date: {
          lunar: {
            day: "15",
            month: "12",
            year: "2021"
          },
          day_of_week: "2",
          solar: {
            day: "17",
            month: "1",
            year: "2022"
          }
        },
        time: {
          hour: "16",
          minute: "00"
        }
      },
      finances: [{
        provider_name: "ACB",
        provider_number: "12645347",
        holder_name: "NGUYEN VAN THIEN"
      }, ],
      email: "thiennv.ksnb@gmail.com",
      phone: "0352501289",
      bg: '/assets/images/bg.jpg',
      bg_fb: '/assets/images/bg-fb.jpg'
    },
    female: {
      name: "Lê Thị Xuân",
      parent: {
        father: "Lê Văn Tuân",
        mother: "Đoàn Thị Tầm"
      },
      location: {
        text: "Xóm Đông - xã Hồng Lạc - huyện Thanh Hà - tỉnh Hải Dương",
        map: "https://goo.gl/maps/jYtzm6935inVYruX6"
      },
      time_start: {
        date: {
          lunar: {
            day: "15",
            month: "12",
            year: "2021"
          },
          day_of_week: "2",
          solar: {
            day: "17",
            month: "1",
            year: "2022"
          }
        },
        time: {
          hour: "16",
          minute: "00"
        }
      },
       finances: [{
        provider_name: "TPBank",
        provider_number: "02518551401",
        holder_name: "LE THI XUAN"
      }, {
        provider_name: "ACB",
        provider_number: "12647547",
        holder_name: "LE THI XUAN"
      }, ],
      email: "xuanuet@gmail.com",
      phone: "0365278248",
      bg: '/assets/images/bg.jpg',
      bg_fb: '/assets/images/bg-fb.jpg'
    },
    default: true
  }
};

module.exports = SeedDB;
