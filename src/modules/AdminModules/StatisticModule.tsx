import { ConfigProvider, Switch } from "antd";
import { useContext, useEffect } from "react";
import { ThemeContext } from "../../ThemeProvider";
import styles from '../../pages/css/AdminPage.module.css';
import { darkSwitch, lightSwitch } from "../../entities/ThemesConvig";
import Moon from '../../assets/icon-moon.svg';
import Sun from '../../assets/icon-sun.svg';
import DarkAge from '../../assets/pictures/icon-dark-age.svg';
import DarkAudience from '../../assets/pictures/icon-dark-audience-reach.svg';
import DarkFriends from '../../assets/pictures/icon-dark-friends.svg';
import DarkGeo from '../../assets/pictures/icon-dark-geo.svg';
import DarkDevice from '../../assets/pictures/icon-dark-reach-by-device.svg';
import DarkUnique from '../../assets/pictures/icon-dark-unique-visitors.svg';
import stylesCon from '../css/Module.module.css';
import LightAge from '../../assets/pictures/icon-light-age.svg';
import LightAudience from '../../assets/pictures/icon-light-audience-reach.svg';
import LightFriends from '../../assets/pictures/icon-light-friends.svg';
import LightGeo from '../../assets/pictures/icon-light-geo.svg';
import LightDevice from '../../assets/pictures/icon-light-reach-by-device.svg';
import LightUnique from '../../assets/pictures/icon-light-unique-visitors.svg';
import Dots from '../../assets/icon-dop.svg';

const StaticModule = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const isDark: boolean = theme == 'dark';

    const onChange = (checked: boolean) => {
      toggleTheme();
    };

    useEffect(() => {

    }, [theme])

    return(
        <div className={theme=='light'?styles.lightpage:styles.backpage}>
            <ConfigProvider theme={isDark?darkSwitch:lightSwitch}>
                <div className={styles.wrap_switch}>
                <Switch  checkedChildren={<img className={styles.image_switch} src={Moon} />} unCheckedChildren={<img className={styles.image_switch} src={Sun} />} defaultChecked onChange={onChange} />
                </div>
          </ConfigProvider>
          <div className={stylesCon.mainConteiner}>
            <div className={stylesCon.wrapConteiner}>
                <img className={stylesCon.friend} src={isDark?DarkFriends:LightFriends} alt='friend'/>
                <img src={isDark?DarkUnique:LightUnique} alt='unique'/>
            </div>
            <div className={stylesCon.wrapConteiner}>
                    <img src={isDark?DarkAudience:LightAudience} alt='audience'/>
                    <img src={isDark?DarkDevice:LightDevice} alt='device'/>
            </div>
            <div className={stylesCon.wrapConteiner}>
                    <img src={isDark?DarkAge:LightAge} alt='age'/>
                    <img src={isDark?DarkGeo:LightGeo} alt='geo'/>
            </div>
            {/* <div>
                <div className={isDark?stylesCon.wrapDarkConteiner:stylesCon.wrapLightConteiner}>
                    <div className={stylesCon.wrapCont}>
                        <h1 className={isDark?stylesCon.headerDark:stylesCon.headerLight}>Юр лица</h1>
                        <img src={Dots} alt='dots'/>
                    </div>
                </div>
                <div className={stylesCon.wrapConteiner}>

                </div>
            </div> */}
          </div>
        </div>
    )
}

export default StaticModule;