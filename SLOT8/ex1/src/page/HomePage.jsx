//src/page/HomePage.jsx
import React from "react";
import HomeCarousel from "../components/home/HomeCarousel.jsx";

export default function HomePage() { 
    return (
        <div>
             <HomeCarousel />
             {/*Bạn có thể thêm các section tiếp theo của trang Home ở dưới */}
             <div className="mt-4">
                <h4>Featured movies collections</h4>
                <p className="text-secondary">
                    Thêm thông tin về các bộ sưu tập phim nổi bật ở đây.
                </p>
             </div>
        </div>
    );
}