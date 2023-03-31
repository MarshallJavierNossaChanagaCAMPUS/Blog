import myHeader from "./components/myHeader.js";
import myBanner from "./components/myBanner.js";
import myCards from "./components/myCards.js";
import myAside from "./components/myAside.js";
import myBlog from "./components/myBlog.js";
import myFooter from "./components/myFooter.js";

myHeader.worker();

myBanner.showImage();
myBanner.workerBanner();

myCards.workerCards();

myAside.workerAside();

myBlog.workerBlog();

myFooter.workerFooter();