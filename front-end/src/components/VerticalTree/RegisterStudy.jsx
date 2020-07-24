import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CustomizedButtons from '../Common/CustomizedButtons';
import MainPagination from '../CardList/MainPagination';
import SelectLang from '../Selector/SelectLang';
import SelectLocal from '../Selector/SelectLocal';
import SearchSelect from '../Selector/SearchSelect';
import InputMulti from '../Write/InputMulti';
import InputOne from '../Write/InputOne';
import WriteFormButton from '../Write/WriteFormButton';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
writeText:{
    fontWeight: "bold"
  },
  SelectMargin:{
    margin: theme.spacing(2),
      marginBottom : theme.spacing(3),
  },
  margin: {
    margin: theme.spacing(1),
    marginBottom : theme.spacing(2),
},
sub:{
    margin: theme.spacing(1),
    marginBottom : theme.spacing(3),
    padding: theme.spacing(2, 0),
    borderBottom: `1px solid ${theme.palette.divider}`, // 구분선
  }

}));

export default function RegisterStudy() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
     <div className={classes.sub}>
        <Typography componet="h5" variant="h5"className={classes.writeText}>
         스터디 모집
        </Typography>
     </div>


        
     <form>
        <div>
          <div className={classes.SelectMargin}>
          <Typography componet="h8" variant="h8"className={classes.writeText}>
          언어를 지정해주세요
          </Typography>
          <SelectLang/>
          </div>
          <div className={classes.SelectMargin}>
          <Typography componet="h8" variant="h8" className={classes.writeText}>
          지역을 지정해주세요
          </Typography>
          <SelectLocal/>
          </div>

          <div className={classes.margin}>
            <Typography componet="h8" variant="h8" className={classes.writeText}>
            제목을 작성해주세요
            </Typography>
        </div>
        <div className={classes.margin}>
          <InputOne/>
        </div>

        <div className={classes.margin}>
            <Typography componet="h8" variant="h8" className={classes.writeText}>
            자세한 내용을 작성해주세요
            </Typography>
        </div>

        <div className={classes.margin}>
          <InputMulti />
        </div>
          <WriteFormButton />
        </div>
        </form>

    </div>
  );
}