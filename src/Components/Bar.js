import React from 'react';
import '../css/navbar.css';

function Item(props) {

    return (
        <li className="nav-item">{props.children}</li>
    )
}

const ListItem = (props) => {
    const {
        className,
        children,
        ...rest
    } = props;

    return (
        <ul className='nav-list-Item'{...rest}>
            {children}
        </ul>
    )
}
const List = (props) => {
    const {
        className,
        children,
        url,
        ...rest
    } = props;

    return (
        <li className='nav-list'{...rest}>
            <a href={url}>{children}</a>
        </li>
    )
}
const Link = (props) => {
    let {
        className = "",
        children,
        ...rest
    } = props;

    return (
        <a className={' nav-link ' + className} {...rest}>
            {props.children}
        </a>
    )
}
const Navbar = (props) => {


    return (
        <div className='nav-bar'>

            <div className='nav-container'>
                <a className='nav-logo' href='./'>
                    NPTU-CNC
                </a>
                <ul className='nav-menu'>
                    <Item >
                        <Link className="" href='https://github.com/nptu-cnc/front.nptu'>
                            形象頁
                        </Link>
                    </Item>
                    <Item >
                        <Link className="" href='https://github.com/nptu-cnc/Employee-Info'>
                            教職員資訊
                        </Link>
                    </Item>
                    <Item >
                        <Link className="" href='https://github.com/nptu-cnc/Student-info'>
                            學生資訊
                        </Link>

                    </Item>
                    <ListItem>
                        學術單位
                        <ul>
                            <List url="https://github.com/nptu-cnc/academic-unit/tree/main/ch">
                                中文
                            </List>
                            <List url="https://github.com/nptu-cnc/academic-unit/tree/main/en">
                                英文
                            </List>
                        </ul>
                    </ListItem>
                    <ListItem>
                        行政單位
                        <ul>
                            <List url="https://github.com/nptu-cnc/Administrative-unit/tree/main/ch">
                                中文
                            </List>
                            <List url="https://github.com/nptu-cnc/Administrative-unit/tree/main/en">
                                英文
                            </List>
                        </ul>
                    </ListItem>
                    <ListItem>
                        其他
                        <ul>
                            <List>
                                Icon List
                            </List>
                            <List>
                                URL List
                            </List>
                            <List>
                                Back Top
                            </List>
                        </ul>
                    </ListItem>
                    <ListItem>
                        教學
                        <ul>
                            <List>
                                Git
                            </List>
                            <List>
                                VsCode
                            </List>
                            <List>
                                教職員資訊維護
                            </List>
                        </ul>
                    </ListItem>
                </ul>

            </div>
        </div>
    )
}

export default Navbar;