import style from "./styles/DAO_Features.module.css";
// import web3 from "./assets/web3.svg";
import advantage from "./assets/advantage.svg";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Helmet } from "react-helmet";

const DAO_Features = () => {
  return (
    <div>
      <Helmet>
        <title> DAO-Features - Zuri Chat</title>
      </Helmet>
      <Header />
      <div className={style.main_container}>
        <div className={style.container}>
          <div className={style.container_wrap}>
            <h1 className={style.sub_heading}>What is Web 3.0?</h1>
            <p className={style.sub_text}>
              The evolution of internet usage, as we know it, has been rapid and
              fertile. We are in an era where upgrades are deemed necessary in
              all facets of digital platforms. Web 3.0 is the answer to the
              decade-long quest for finding a solution that represents back-end
              functionalities in addition to front-end capabilities that we
              already indulge in. A ‘read-write-execute web’ is what Web 3.0 is,
              in simple terms. It is a solution where data is not owned but
              shared in what is being termed as the ‘Semantic Web’. Web 3.0
              enables systems to create, share and connect content via search,
              and artificial intelligence powers web pages to understand the
              meaning of words instead of just recognizing relevant keywords.
              Web 3.0 is much more than that. It is where the machines do the
              thinking and the users do the execution.
            </p>
            <h1 className={style.sub_heading}>
              The Defining Properties of Web 3.0
            </h1>
            <p className={style.sub_text}>
              Web 3.0 is enticing because of the new and unheard-of features
              that are calibrated within the existing ecosystem of Web 2.0. Web
              3.0 has the power to alter internet usage tremendously. Automated
              routine tasks, scheduling reminders, AI-based search, etc. will
              become more commonplace with Web 3.0. With the advent of Web 3.0,
              the digital experience of users is enhanced greatly while also
              providing security for web apps. 3D graphics come in to create
              endless possibilities of how content can be viewed. Semantic
              metadata further enables information connectivity such that all
              available information is accessible to everyone on one common
              network based on user behavior. This transcends the idea of a
              simple website and creates a whole new web of its own. And since
              all data is made accessible to multiple smart applications, Web
              3.0 will enable services to be used everywhere, thus propagating
              its ubiquity.
            </p>
            <h1 className={style.sub_heading}>
              Why is Web 3.0 the "real internet revolution"?
            </h1>
            <p className={style.sub_text}>
              Web 3.0 is here to completely change the game, across industries.
              Take the health industry, for example, that has been established
              on Web 2.0. What if there is a way to digitize existing and
              automate all incoming data to reduce workload and save precious
              time? Web 3.0 makes this possible because it establishes itself as
              a ‘find engine’ rather than a ‘search engine’.
            </p>
            <h1 className={style.sub_heading}>Benefits of Web 3.0</h1>
            <p className={style.sub_text}>
              We are moving through a revolution that can change our lives
              completely. Web 1.0 was all about building the basic technologies
              and the ability to connect through the internet. Web 2.0 took
              ahead of what Web 2.0 has to offer. However, it was primarily
              controlled by organizations and corporations for their
              self-benefit. Web 3.0 brings the human aspect back by providing
              privacy and security to the users rather than making corporations
              more powerful than ever. The vision of Web 3.0 changed in the last
              7-8 years. Initially, it was simple, but with the introduction of
              blockchain and bitcoin, the vision and approach have changed
              completely. Now, Web 3 focuses more on the decentralized features
              that the blockchain has to offer.
            </p>
            <div className={style.benefit}>
              <img src={advantage} alt="" />
            </div>
            <h1 className={style.sub_heading}>Anti-monopoly and Pro-privacy</h1>
            <p className={style.sub_text}>
              Web 3.0 will bring a pro-privacy and anti-monopoly structure to
              the network. It will not incentivize centralized platforms. In
              short, we will see a complete turnaround where the central theme
              will be privacy and decentralization. The middle-man will know no
              business or need for this kind of platform. This move will be
              facilitated with the help of blockchains such as Ethereum,
              Hyperledger, Corda, and others. The government, on the other hand,
              will also see decentralization. For the best interest, it is wise
              for corporations to adapt to new standards of Web 3.0 by providing
              decentralized services that focus on privacy and security rather
              than control.
            </p>
            <h1 className={style.sub_heading}>Secure Network Web 3.0</h1>
            <p className={style.sub_text}>
              Features will be more secure than its predecessors. This is made
              possible by two factors, including distributed nature and
              decentralization. Hackers or exploiters will find it difficult to
              penetrate the network. Also, if they are able to do so, each of
              their operations can be tracked and retracted within the network.
              Without centralization, it will also become hard for hackers to
              take full control of an organization. However, blockchain
              platforms do suffer from some form of exploits such as 51% attack,
              but most of the blockchain apps and platforms can quickly be
              patched to protect these types of threats.
            </p>
            <h1 className={style.sub_heading}>Data Ownership</h1>
            <p className={style.sub_text}>
              Users will find it easy to trust Web 3.0. Until now, the data
              generated by the users were stored and used by big corporations.
              With Web 3.0 features, end-users will have full data ownership.
              The data that is transferred through the network will be
              completely encrypted. Also, users will be able to decide which
              information they want to share with corporations or 3rd party
              advertising platforms. However, the current trend is completely
              different. With Web 3.0 features, the users can now sell their
              data to corporations and earn from it.
            </p>
            <h1 className={style.sub_heading}>Interoperability</h1>
            <p className={style.sub_text}>
              Interoperability is one of the key features of Web 3.0. With a
              decentralized network, it will become easy for applications to
              work across different devices and platforms such as T.V.s,
              smartphones, smart roads, and so on. Developers will also find it
              easy to develop Web 3.0 apps.
            </p>
            <h1 className={style.sub_heading}>5. No Interruption in Service</h1>
            <p className={style.sub_text}>
              Distributed systems are less prone to service interruption. As
              there is no central entity for functioning, it becomes hard for a
              distributed denial of service (DDoS) or other forms of service
              malfunction attempts to have an impact. This makes Web 3 a great
              place to share data and critical services without worrying about
              service interruption.
            </p>
            <h1 className={style.sub_heading}>Permissionless Blockchains</h1>
            <p className={style.sub_text}>
              The idea behind Web 3.0 is to power blockchains that don’t need a
              central authority. This means that anyone can join the blockchain
              and participate by creating an address. Permissionless blockchains
              open up a new array of possibilities, including access to people
              who are early discriminated against due to their gender, income,
              geography, and so on. Although there are permissioned blockchains
              as well. So, what exactly it means in layman’s terms? It means
              that there won’t be any restrictions on Web 3.0.
            </p>
            <h1 className={style.sub_heading}>Semantic Web</h1>
            <p className={style.sub_text}>
              Web 3.0 will also host the properties of a semantic web. The
              semantic Web is an improvement over the last set of technologies
              that are used for Web 2.0. It enables data to be shared across
              multiple systems, platforms, and community boundaries. It will act
              as a bridge between different data formats and platforms. By using
              the semantic Web, we will be able to connect better, share, and
              enjoy the internet as never before.
            </p>
            <h1 className={style.sub_heading}>Ubiquity</h1>
            <p className={style.sub_text}>
              Ubiquity is the result of interoperability. With Web 3.0, we can
              access data and information across multiple applications without
              the need for a particular device. This means that you don’t have
              to worry about getting a particular device to get access to Web
              3.0. If a device has basic internet functionality and
              connectivity, you will be able to access the Web. All in all, our
              lives will be completely changed as we will be connected through a
              better set of technologies such as artificial intelligence, the
              blockchain, and much more! Hopefully, by now, you have got an idea
              of what is Web 3.0 and its benefits.
            </p>
            <h1 className={style.sub_heading}>Conclusion</h1>
            <p className={style.sub_text}>
              As we move to a more centralized internet, with augmented reality
              (AR) and artificial intelligence (AI) playing key roles in
              defining our use-case scenarios, we can expect a new wave of the
              global internet revolution. What Web 3.0 brings to the table is
              that it offers developers much-needed room for innovation. On the
              other hand, users can expect better digital experiences and a more
              enhanced and refined internet altogether. If done right, Web 3.0
              can be the key to solving many problems that can put an end to red
              tape, save time, increase productivity, and all this at a marginal
              cost. We can look forward to a smarter version of the internet,
              because, believe it or not, it is here to stay.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DAO_Features;
