import Header from "./components/Header";
import { Container } from "./index";

export default function App() {
    return (<div>
        <Container>
            <Header />
            <div className="content">
                <div className="stories">
                    <div className="story">
                        <div className="avatar">
                            <img src="" alt="" />
                            <span className="name">Nome do usuário</span>
                        </div>
                    </div>
                </div>
                <div className="feed"></div>
            </div>
            <div className="sidebar"></div>
            <div className="footer"></div>
        </Container>
    </div>)
}