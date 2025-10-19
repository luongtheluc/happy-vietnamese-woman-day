
// Giả sử bạn lưu ảnh trong thư mục public
const whiteFlower = '/images/white-flower.png';
const pinkFlower = '/images/pink-flower.png';
const cornerFlowers = '/images/corner-flowers.png';

type ImageSource = {
  src: string;
}

const Flower = ({ src }:ImageSource) => (
  <img src={src} alt="flower" className="w-8 h-8 md:w-10 md:h-10" />
);

const VietnameseWomensDayCard = () => {
  const leftFlowers = [pinkFlower, whiteFlower, pinkFlower, whiteFlower, pinkFlower, whiteFlower, pinkFlower];
  const rightFlowers = [whiteFlower, pinkFlower, whiteFlower, pinkFlower, whiteFlower, pinkFlower, whiteFlower];

  return (
    <div className="font-roboto bg-[#FEF6F8] p-4 sm:p-6 md:p-8 rounded-xl shadow-lg max-w-4xl mx-auto my-10 relative overflow-hidden">
      {/* Hoa trang trí ở các góc */}
      <img src={cornerFlowers} alt="decoration" className="absolute top-2 right-2 w-24 opacity-80" />
      <img src={cornerFlowers} alt="decoration" className="absolute bottom-2 right-2 w-24 opacity-80 transform scale-y-[-1]" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        
        {/* === Cột bên trái === */}
        <div className="bg-[#F58DB2] text-white rounded-3xl flex items-center relative py-10 px-4">
          {/* Dải hoa bên trái */}
          <div className="absolute left-[-18px] top-0 bottom-0 flex flex-col justify-around py-4">
            {leftFlowers.map((flower, index) => <Flower key={index} src={flower} />)}
          </div>
          
          {/* Dải hoa bên phải */}
           <div className="absolute right-[-18px] top-0 bottom-0 flex flex-col justify-around py-4">
            {rightFlowers.map((flower, index) => <Flower key={index} src={flower} />)}
          </div>

          {/* Border giả */}
          <div className="absolute inset-0 border-2 border-white border-dashed rounded-3xl m-2.5"></div>

          {/* Nội dung chính */}
          <div className="w-full text-center z-10">
            <p className="text-8xl md:text-9xl font-bold font-playfair tracking-tighter">20</p>
            <p className="text-xl tracking-[0.2em] font-light mt-1">OCTOBER</p>
            <div className="mt-4">
              <p className="font-playfair text-2xl italic">Vietnamese</p>
              <p className="font-playfair text-5xl italic font-semibold my-1">Women's</p>
              <p className="font-playfair text-2xl italic">DAY</p>
            </div>
          </div>
        </div>

        {/* === Cột bên phải === */}
        <div className="flex flex-col justify-center p-4">          
          <div className="text-left">
            <h2 className="text-[#E83F63] text-xl font-semibold">CHÚC MỪNG NGÀY</h2>
            <h1 className="font-playfair text-4xl md:text-5xl text-[#D42A8F] italic font-bold">Phụ Nữ Việt Nam</h1>
          </div>

          <div className="text-gray-700 mt-6 space-y-4 text-base">
            <p>
              Nhân ngày Phụ Nữ Việt Nam 20/10/2022, Trung tâm Anh Ngữ IEC xin gửi những lời chúc tốt đẹp nhất đến toàn thể phái nữ Việt Nam.
            </p>
            <p>
              Chúc quý phụ huynh, quý đối tác cùng toàn thể đồng nghiệp nữ ngày càng trẻ trung, xinh đẹp và thành công trong cuộc sống!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VietnameseWomensDayCard;