import { useNavigate } from "react-router-dom";
import React from "react";
import screen1 from "../assets/screen1.jpg";
const Home = () => {
    const navigate = useNavigate();
    
    const handSubmit = (e) => {
        e.preventDefault();
        navigate('/edit-profile');
    };
    return (

        <div className="mt-12">

            <nav className="bg-white shadow-md px-6 py-3 flex justify-between items-center">
                <div className="flex items-center">
                    <div className="bg-black text-white p-2 rounded-full">
                        <h1 className="text-xl font-bold">NAG</h1>
                    </div>
                    <h2 className="ml-3 text-2xl font-bold">NFT ART GALLERY</h2>
                </div>
                <div className="flex items-center space-x-6">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="border rounded-lg py-2 px-4"
                    />
                    <button
                        className="bg-black text-white py-2 px-4 rounded-lg"
                        onClick={handSubmit}
                    >
                        Create Your NFT
                    </button>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative mt-8">
                <div className="h-80 bg-cover bg-center"
                    style={{
                        backgroundImage: `url('https://imgs.search.brave.com/tSyGwYPBePTONbPJLmsE7IzAqFsJmhOMa-cE8YqfYCE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9uZnRu/b3cuY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDIxLzA5L25m/dG5vdy1tb2RhbC1i/Zy0xLmpwZw')`,
                    }}>
                    <div className="absolute inset-0 flex items-center justify-center text-center">
                        <div className="text-white">
                            <h2 className="text-3xl font-bold text-black">"Revolutionize Your Art with Blockchain Technology"</h2>
                            <p className="mt-2 text-black">Create, Showcase, and Sell Your Unique NFTs with Confidence.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured NFT Collections */}
            <section className="mt-12 px-6">
                <h2 className="text-2xl font-bold mb-4">FEATURED NFT ART COLLECTIONS</h2>
                <div className="grid grid-cols-4 gap-6">
                    <NFTCard
                        title="Chrome Squiggle"
                        artist="XYZ GROUP"
                        price="$6.4 Billion"
                        imgUrl={screen1}
                    />
                    <NFTCard
                        title="EVERYDAYS"
                        artist="Beeple"
                        price="$69.3 Million"
                        imgUrl="https://imgs.search.brave.com/5CD2PU-YmUb_bAiBt__LoCJSOoYFEh72a-ION8EfMwI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9leHBl/cnRwaG90b2dyYXBo/eS5iLWNkbi5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjEv/MDgvTkZUcy1WaW5j/ZW50YXMtTGlza2F1/c2thcy5qcGc"
                    />
                    <NFTCard
                        title="REPLICATOR"
                        artist="Mad Dog Jones"
                        price="$4 Million"
                        imgUrl="https://imgs.search.brave.com/atP1UA7Unvk6EuETMqMGY79HwJeYEnfWE_6L1KLUQ70/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hcnRh/cnQtdXBsb2Fkcy5z/My5hbWF6b25hd3Mu/Y29tLzIwMjIvMDcv/MDctMDgta3ItbXIt/aW1hZ2UxLTA1Nzky/MS1XdHpuY2hUVS0x/MDI0eDY3MC53ZWJw"
                    />
                    <NFTCard
                        title="Bitcoin Angel"
                        artist="Trevor Jones"
                        price="$3.2 Million"
                        imgUrl="https://imgs.search.brave.com/ctS2eirqxT32Rzf0WYp6SBvHlsBDM02ibuyg7DOKxEE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kMTFr/dmZ2NGt4dzVzNC5j/bG91ZGZyb250Lm5l/dC93cC1jb250ZW50/L3VwbG9hZHMvc2l0/ZXMvMTUvMjAyMS8w/NS8xOTEzMDY0Ny9u/cC10ZWFtLWNyeXB0/b19taW5pbmctd29y/a18tMS5qcGc"
                    />
                </div>
            </section>
        </div>
    );
};

// NFTCard Component
const NFTCard = ({ title, artist, price, imgUrl }) => {
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={imgUrl} alt={title} className="w-full h-40 object-cover" />
            <div className="p-4">
                <h3 className="text-lg font-bold">{title}</h3>
                <p className="text-sm text-gray-600">ARTIST NAME: {artist}</p>
                <p className="text-sm text-gray-600">PRICE: {price}</p>
            </div>
        </div>
    );
};

export default Home;
