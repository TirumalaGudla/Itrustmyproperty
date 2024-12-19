import Footer from "../../components/Footer";
import Header from "../../components/Header/Header";
import "./InprogressPage.css";

const InprogressPage = () => {
    return (
        <>
            <Header />
            <div className="inprogress">
                <h1>🚧 This Page is Under Construction! 🚧</h1>
                <p>We’re working hard to bring this page to life. Please check back soon!</p>
            </div>

            <Footer />
        </>
    );
};

export default InprogressPage;
