import { ConnectButton } from "web3uikit"

const Header = () => {
    return (
        <div>
            Decentralised lottery
            <ConnectButton moralisAuth={false} />
        </div>
    )
}

export default Header
