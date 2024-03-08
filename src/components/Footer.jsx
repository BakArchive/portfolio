function Footer() {
    const time = new Date();
    return (
        <p className="text-center my-3">Crafted by Muen Yu | &#169;{time.getFullYear()} All rights reserved.</p>
    )
}

export default Footer;