import React from "react"
import { navigate } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import { Pagination } from "@material-ui/lab"
import kebabCase from 'lodash/kebabCase'

const useStyles = makeStyles({
  root: {
    display: `flex`,
    flexWrap: `wrap`,
    justifyContent: `center`,
    alignItems: "center",
  },
});

const TagPagenation = ({ pageContext }) => {
  const classes = useStyles()
  const { tag, numberOfPages, humanPageNumber } = pageContext

  const handleChange = (_event, value) => {
    value === 1 ? navigate(`/tags/${kebabCase(tag)}/`)
                : navigate(`/tags/${kebabCase(tag)}/${value}`)
  }
  return (
    <div className={classes.root}>
      <Pagination
        variant="outlined"
        defaultPage={humanPageNumber}
        count={numberOfPages}
        onChange={handleChange}
      />
    </div>
  )
}
export default TagPagenation
