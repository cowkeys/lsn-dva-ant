import { connect } from 'dva';

const MainLayout = (prop) => {
    const {conns} = prop
    return (
            <div>
            Welcome : {conns}
            </div>
    );
};

function mapStateToProps(state) {
    const { conns } = state.maintop;
    return {
        conns,
    };
}

export default connect(mapStateToProps)(MainLayout);

