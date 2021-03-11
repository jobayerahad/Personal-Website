import { Dialog, DialogContent, Zoom } from "@material-ui/core";
import { Document, Page, View, Text, PDFViewer } from "@react-pdf/renderer";
import PropTypes from "prop-types";

const CV = ({ data: { name }, open, closeHandler }) => (
  <Dialog open={open} onClose={closeHandler} aria-labelledby="cv" scroll="body" TransitionComponent={Zoom}>
    <DialogContent dividers>
      <PDFViewer>
        <Document>
          <Page size="A4">
            <View>
              <Text>{name}</Text>
            </View>
          </Page>
        </Document>
      </PDFViewer>
    </DialogContent>
  </Dialog>
);

CV.propTypes = {
  data: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  closeHandler: PropTypes.func.isRequired,
};

export default CV;
