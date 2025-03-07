import React, { useEffect } from 'react'
import classes from '../../index.module.scss'
import TableRow from '../../components/Table/TableRow/TableRow'
import { fetchTableData } from '../../store/actions/table'
import { connect } from 'react-redux'

function Table(props) {
    useEffect(() => {
        props.fetchTableData()
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className={classes.Table}>
            <div className={classes.TableHead}>
                <span className={classes.TableHead__value}>Name</span>
                <span className={classes.TableHead__value}>Category</span>
                <span className={classes.TableHead__value}>Location</span>
                <span className={classes.TableHead__value}>Platform</span>
                <span className={classes.TableHead__value}>Followers</span>
                <span className={classes.TableHead__value}>Online</span>
                <span className={classes.TableHead__value}>Price <sub>USD</sub></span>
                <span className={classes.TableHead__value}>Link</span>
                <span className={classes.TableHead__value}>Ready <br />to bet</span>
                <span className={classes.TableHead__value}>Date</span>
            </div>
            {
                props.tableData.map((row, index) => (
                    <TableRow
                        name={row.name}
                        category={row.category}
                        location={row.location}
                        platform={row.platform}
                        followers={row.followers}
                        online={row.online}
                        price={row.adPrice}
                        link={row.link}
                        isBet={row.readyBet}
                        date={row.date}
                        key={`${Math.floor(Math.random * 10)}Row${index}`}
                    />
                ))
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        tableData: state.table.tableData,
        loading: state.table.loading,
        error: state.table.error,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchTableData: () => { dispatch(fetchTableData()) },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Table)
