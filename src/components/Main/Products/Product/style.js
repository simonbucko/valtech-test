import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(() => ({
    root: {
        maxWidth: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    cardActions: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    cartSection: {
        display: 'flex',
        alignItems: 'center'
    }

}))