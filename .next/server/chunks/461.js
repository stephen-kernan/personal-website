exports.id = 461;
exports.ids = [461];
exports.modules = {

/***/ 5882:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o": () => (/* binding */ GlobalNav)
/* harmony export */ });
/* unused harmony export MobileDrawer */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3365);
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _globalNav_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2045);
/* harmony import */ var _globalNav_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_globalNav_module_css__WEBPACK_IMPORTED_MODULE_3__);




const MobileDrawer = ({
  links,
  activeLink
}) => {
  const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_1__.useTheme)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
    sx: {
      bgcolor: "eraserHead",
      flexGrow: 1,
      flexShring: 0,
      padding: "1em",
      display: {
        xs: "flex",
        md: "none"
      },
      flexFlow: "column"
    }
  }, links.map(link => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
    variant: "body2",
    component: "a",
    className: "global-nav__link",
    sx: {
      color: "bakugoLight",
      borderBottom: `4px solid ${activeLink === link.path ? theme.palette.primary.main : "transparent"}`,
      marginBottom: "1rem"
    },
    href: link.path,
    underline: "none"
  }, link.label)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Divider, {
    variant: "middle",
    sx: {
      marginTop: "2rem"
    }
  }));
};

const MobileNav = ({
  links,
  activeLink,
  open,
  toggleMenu
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__.IconButton, {
    id: "openmenu",
    onClick: toggleMenu
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_2___default()), {
    sx: {
      color: "bakugoLight"
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Drawer, {
    anchor: "left",
    sx: {
      width: "max(50%, 180px)",
      flexShrink: 0,
      "& .MuiDrawer-paper": {
        width: "max(50%, 180px)",
        boxSizing: "border-box"
      }
    },
    open: open,
    variant: "temporary",
    onClose: toggleMenu
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(MobileDrawer, {
    activeLink: activeLink,
    links: links
  })));
};

const GlobalNav = ({
  activeLink
}) => {
  const [displayMenu, setDisplayMenu] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_1__.useTheme)();
  const links = [{
    label: "about",
    path: "/about"
  }, {
    label: "blog",
    path: "/blog"
  } // {
  //   label: "projects",
  //   path: "/projects",
  // },
  ];

  const toggleMenu = () => {
    setDisplayMenu(!displayMenu);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__.AppBar, {
    position: "static",
    className: `page-nav global-nav`
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Toolbar, {
    className: (_globalNav_module_css__WEBPACK_IMPORTED_MODULE_3___default()["global-nav__container"]),
    sx: {
      bgcolor: "eraserHead"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
    sx: {
      display: {
        xs: "flex",
        md: "none"
      },
      width: "min-content"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(MobileNav, {
    activeLink: activeLink,
    links: links,
    open: displayMenu,
    toggleMenu: toggleMenu
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
    variant: "h3",
    component: _mui_material__WEBPACK_IMPORTED_MODULE_1__.Link,
    className: `${(_globalNav_module_css__WEBPACK_IMPORTED_MODULE_3___default()["global-nav__page-header"])} ${(_globalNav_module_css__WEBPACK_IMPORTED_MODULE_3___default()["global-nav__link"])}`,
    sx: {
      color: "bakugoLight"
    },
    href: "/",
    underline: "none"
  }, "stephen kernan"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
    className: (_globalNav_module_css__WEBPACK_IMPORTED_MODULE_3___default()["global-nav__middle-section"]),
    sx: {
      display: {
        xs: "none",
        md: "flex"
      }
    }
  }, links.map(link => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
    variant: "body2",
    component: _mui_material__WEBPACK_IMPORTED_MODULE_1__.Link,
    className: "global-nav__link",
    sx: {
      display: {
        xs: "none",
        md: "flex"
      },
      color: "bakugoLight",
      borderBottom: `4px solid ${activeLink === link.label ? theme.palette.primary.main : "transparent"}`
    },
    href: link.path,
    underline: "none"
  }, link.label)))));
};

/***/ }),

/***/ 9016:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ SEO)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2791);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);


const SEO = ({
  pageTitle,
  description
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__.Helmet, {
    title: `${pageTitle} | Stephen Kernan`,
    meta: [{
      name: "description",
      content: description
    }, {
      property: "og:title",
      content: `${pageTitle} | Stephen Kernan`
    }, {
      property: "og:description",
      content: description
    }, {
      property: "og:type",
      content: "website"
    }, {
      name: "twitter:card",
      content: "summary"
    }, {
      property: "twitter:title",
      content: `${pageTitle} | Stephen Kernan`
    }, {
      property: "twitter:description",
      content: description
    }]
  });
};

/***/ }),

/***/ 2045:
/***/ ((module) => {

// Exports
module.exports = {
	"global-nav": "globalNav_global-nav__a_1YF",
	"global-nav__settings": "globalNav_global-nav__settings__oA_LT",
	"global-nav__link": "globalNav_global-nav__link__FnV8h",
	"global-nav__link--active": "globalNav_global-nav__link--active__udQ5T",
	"global-nav__container": "globalNav_global-nav__container__50IoE",
	"global-nav__middle-section": "globalNav_global-nav__middle-section___qUau",
	"settings-modal__box": "globalNav_settings-modal__box__2MWuR",
	"theme-select": "globalNav_theme-select__cqXNF"
};


/***/ })

};
;