import React from "react";
import { compose } from "redux";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import withWidth, { isWidthDown } from "@material-ui/core/withWidth";

import "./styles.css";

// Component to buld the galleries grid and insert data
const styles = (theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, " +
      "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
  icon: {
    color: "white",
  },
});

//function to check screen width and alter number of columns in the grid
function AdvancedGridList(props) {
  const { classes } = props;

  const tileData = props.tileData;
  const columns = () => {
    if (isWidthDown("xs", props.width)) {
      return 1;
    }

    if (isWidthDown("sm", props.width)) {
      return 2;
    }
    if (isWidthDown("md", props.width)) {
      return 3;
    }

    return 3;
  };

  return (
    <div className={`grid-bg ${classes.root}`}>
      <GridList
        cellHeight={250}
        cols={columns()}
        spacing={8}
        className={`${classes.gridList} griddy`}
      >
        {/* slice tiledata array size based on screen height, then map array */}
        {tileData.slice(0, window.innerHeight <= 1200 ? 6 : 9).map((tile) => (
          <GridListTile
            className="gallery"
            key={tile.img}
            cols={tile.featured ? 2 : 1}
            rows={tile.featured ? 2 : 1}
          >
            <a href={tile.live}>
              <div>
                <img
                  src={!props.hasWebP ? tile.imgalt : tile.img}
                  alt={tile.title}
                />
              </div>
            </a>
            <GridListTileBar
              title={tile.art ? tile.title : null}
              titlePosition="bottom"
              actionIcon={
                <div>
                  {tile.art ? (
                    <IconButton />
                  ) : (
                    <div>
                      <IconButton
                        href={tile.live}
                        target="blank"
                        className="link-btn"
                      >
                        {tile.title}
                      </IconButton>
                      <IconButton
                        href={tile.link}
                        target="blank"
                        className="link-btn"
                      >
                        <i className="fab fa-github-alt fa-lg" />
                      </IconButton>
                    </div>
                  )}
                </div>
              }
              actionPosition="left"
              className={classes.titleBar}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

AdvancedGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(withStyles(styles), withWidth())(AdvancedGridList);
