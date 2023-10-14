import { ThemeConfig } from "antd";

export const darkConfig: ThemeConfig = {
    token: {
      colorBgContainer: '#1A1D24',
      colorBorder: '#363E4B',
      colorText: '#fff' ,
      colorTextPlaceholder: '#A7B0BF',
      borderRadius: 15,
      controlHeight: 55,
      fontFamily: 'VTBGroupUI',
      colorPrimary: '#0450C0',
      colorIcon: '#fff',
      colorBgElevated: '#1A1D24'
    },
    components: {
      Table:{
        headerBg: '#363E4B',
        headerBorderRadius: 15,
        headerColor: '#fff',
        borderColor: '#ffffff00',
        headerSplitColor: '#ffffff00',
        rowExpandedBg: '#1A1D24'
      },
      Select: {
        clearBg: '#363E4B',
        selectorBg: '#363E4B',
        multipleItemBg: '#363E4B',
        optionActiveBg: '#363E4B',
        optionSelectedBg: '#0450C0',
        optionSelectedColor: '#fff'
      }
    }
  }

export const lightConfig: ThemeConfig = {
    token: {
      colorBgContainer: '#fff',
      colorBorder: '#A7B0BF',
      colorText: '#1A1D24' ,
      colorTextPlaceholder: '#1A1D24',
      borderRadius: 15,
      controlHeight: 55,
      fontFamily: 'VTBGroupUI',
      colorPrimary: '#0450C0',
      colorIcon: '#1A1D24',
      colorBgElevated: '#fff'
    },
    components: {
      Table:{
        headerBg: '#A7B0BF',
        headerBorderRadius: 15,
        headerColor: '#1A1D24',
        borderColor: '#ffffff00',
        headerSplitColor: '#ffffff00',
        rowExpandedBg: '#fff'
      },
      Select: {
        clearBg: '#A7B0BF',
        selectorBg: '#A7B0BF',
        multipleItemBg: '#A7B0BF',
        optionActiveBg: '#A7B0BF',
        optionSelectedBg: '#0450C0',
        optionSelectedColor: '#1A1D24'
      },
      Switch: {
        trackHeight: 30,
        trackMinWidth: 70,
        handleSize: 22,
        handleBg: '#FCFCFE'
      }
    }
  }

  export const darkSwitch: ThemeConfig = {
    token: {
        colorBgContainer: '#363E4B'
    },
    components: {
      Switch: {
        trackHeight: 30,
        trackMinWidth: 70,
        handleSize: 22,
        handleBg: '#FCFCFE'
      }
    }
  }

  export const lightSwitch: ThemeConfig = {
    token: {
        colorPrimary: '#EAECEF'
    },
    components: {
      Switch: {
        trackHeight: 30,
        trackMinWidth: 70,
        handleSize: 22,
        handleBg: '#3B83EF'
      }
    }
  }