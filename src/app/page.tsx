
import Header from "./components/header";
import AdvanceCourses from "./components/advance";
import Courses from "./components/course";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div >
      <Header/>
      <AdvanceCourses/>
      <Courses/>
      <Footer/>
    </div>
  );
}
