import React from 'react'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'


export default function ObieeResetPassword(props) {

  const [passChangeSuccess,setPassChangeSuccess] = React.useState(false);

  const [currentPass,setCurrentPass] = React.useState('');
  const [newPass,setNewPass] = React.useState('');
  const [confirmPass,setConfirmPass] = React.useState('');

  const _handleModalClose = () => {
    setPassChangeSuccess(false);
  }


  const handleSubmit = () => {
  
  }

    return (
        <Paper className="form form--wrapper" elevation={10}>
        <form className="form" onSubmit={handleSubmit}>
          <FormControl fullWidth margin="dense">
            <InputLabel
              htmlFor="password-current"
              //error={Boolean(touched.currentPass && errors.currentPass)}
            >
              {'Current Password'}
            </InputLabel>
            <Input
              id="password-current"
              name="currentPass"
              type="password"
              value={currentPass}
              onChange={e=>setCurrentPass(e.target.value)}
              onBlur={e=>{}}
              //error={Boolean(touched.currentPass && errors.currentPass)}
            />
            <FormHelperText
              //error={Boolean(touched.currentPass && errors.currentPass)}
            >
              {/* {touched.currentPass && errors.currentPass
                ? errors.currentPass
                : ''} */}
            </FormHelperText>
          </FormControl>
          <FormControl
            fullWidth
            margin="dense"
            //error={Boolean(touched.newPass && errors.newPass)}
          >
            <InputLabel
              htmlFor="password-new"
              //error={Boolean(touched.newPass && errors.newPass)}
            >
              {'New Password'}
            </InputLabel>
            <Input
              id="password-new"
              name="newPass"
              type="password"
              value={values.newPass}
              onChange={handleChange}
              onBlur={handleBlur}
              //error={Boolean(touched.newPass && errors.newPass)}
            />
            {/* <FormHelperText
              error={Boolean(touched.newPass && errors.newPass)}
            >
              {touched.newPass && errors.newPass ? errors.newPass : ''}
            </FormHelperText> */}
          </FormControl>
          <FormControl
            fullWidth
            margin="dense"
            //error={Boolean(touched.confirmPass && errors.confirmPass)}
          >
            <InputLabel
              htmlFor="password-confirm"
              //error={Boolean(touched.confirmPass && errors.confirmPass)}
            >
              {'Confirm Password'}
            </InputLabel>
            <Input
              id="password-confirm"
              name="confirmPass"
              type="password"
              value={values.confirmPass}
              onChange={handleChange}
              onBlur={handleBlur}
              //error={Boolean(touched.confirmPass && errors.confirmPass)}
            />
            {/* <FormHelperText
              error={Boolean(touched.confirmPass && errors.confirmPass)}
            >
              {touched.confirmPass && errors.confirmPass
                ? errors.confirmPass
                : ''}
            </FormHelperText> */}
          </FormControl>
          <Button
            type="submit"
            variant="raised"
            color="primary"
            disabled={Boolean(!isValid || isSubmitting)}
            style={{ margin: '16px' }}
          >
            {'Reset Password'}
          </Button>
        </form>
        {this._renderModal()}
      </Paper>
)
  
}
