import Card from "./Card";
import ContactUs from "./Contactus";
import Footer from "./Footer";
import { obj } from "./Object";

const Blog = () => {
  return (
    <>
      <div className="container">
        <h1 className="text-center text-success">Our Blog</h1>
        <h3 className="text-center">
          Sharing some knowledge about our industry
        </h3>
        {/* <div class="row mt-4 ">
        {Object.values(ob).map((e) => (
          <div className="col border rounded overflow-hidden shadow-sm m-2">
            <Card details={e} />
          </div>
        ))}
      </div> */}
        <div class="row mt-4 mb-4">
          {Object.values(obj).map((e) => (
            <div className="col border rounded overflow-hidden shadow-sm m-2">
              <Card details={e} image={e.image} />
            </div>
          ))}
        </div>
      </div>
      <ContactUs />
      <Footer />
    </>
  );
};

export default Blog;
