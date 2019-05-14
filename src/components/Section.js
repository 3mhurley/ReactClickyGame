import React from "react"

import PropTypes from "prop-types"
import classNames from "classnames"
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import CssBaseline from "@material-ui/core/CssBaseline"
import Grid from "@material-ui/core/Grid"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import { withStyles } from "@material-ui/core/styles"

import SectionTable from "./SectionTable"

const styles = theme => ({
	appBar: {
		position: "relative"
	},
	icon: {
		marginRight: theme.spacing.unit * 2
	},
	heroUnit: {
		backgroundColor: theme.palette.background.paper
	},
	heroContent: {
		maxWidth: 600,
		margin: "0 auto",
		padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`
	},
	heroButtons: {
		marginTop: theme.spacing.unit * 4
	},
	layout: {
		width: "auto",
		marginLeft: theme.spacing.unit * 3,
		marginRight: theme.spacing.unit * 3,
		[theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
			width: 1100,
			marginLeft: "auto",
			marginRight: "auto"
		}
	},
	cardGrid: {
		padding: `${theme.spacing.unit * 8}px 0`
	},
	card: {
		height: "100%",
		display: "flex",
		flexDirection: "column"
	},
	cardMedia: {
		paddingTop: "56.25%" // 16:9
	},
	cardContent: {
		flexGrow: 1
	},
	footer: {
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing.unit * 6
	}
})

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
let score = 0

// function handleClick() {
// 	score++

// 	// Refresh
// 	cards.sort(() => Math.random() - 0.5)
// }

function Section(props) {
	const { classes } = props

	return (
		<React.Fragment>
			<CssBaseline />
			<main>
				{/* Hero unit */}
				<div className={classes.heroUnit}>
					<div className={classes.heroContent}>
						<SectionTable />
					</div>
				</div>
				<div className={classNames(classes.layout, classes.cardGrid)}>
					{/* End hero unit */}
					<Grid container spacing={40}>
						{cards.map(card => (
							<Grid item key={card} sm={6} md={4} lg={3}>
								<Card className={classes.card}>
									{/* <CardActionArea> */}
									<CardMedia
										component='img'
										className={classes.cardMedia}
										image={"../Images/gophers/" + card + ".png"}
										title={"Gopher " + card}
									/>
									{/* </CardActionArea> */}
									{/* <CardActions>
										<button onClick={this.handleClick} />
									</CardActions> */}
								</Card>
							</Grid>
						))}
					</Grid>
				</div>
			</main>
			{/* Footer */}
			<footer className={classes.footer}>
				<Typography variant='h6' align='center' gutterBottom>
					Footer
				</Typography>
				<Typography variant='subtitle1' align='center' color='textSecondary' component='p'>
					Something here to give the footer a purpose!
				</Typography>
			</footer>
			{/* End footer */}
		</React.Fragment>
	)
}

Section.propTypes = {
	classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Section)
