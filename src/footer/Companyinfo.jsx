import Logo from './logo.png';
function CompanyInfo(){

    return(
        <div style={{display:'flex',flexDirection:'column',color:'white',width:'243.62px',height:'132px',gap:'27px'}}>
        <h1><img src={Logo}/>Nexcent</h1>
        <p>Copyright © 2020 Landify UI Kit.</p>
        <p>All rights reserved</p>
        </div>
    )
}
export default CompanyInfo;

