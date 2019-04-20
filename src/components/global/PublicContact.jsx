import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { withStyles, Tooltip } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';

const styles =  {
    root: {
        '& > *': {
            paddingLeft: '10px',
        }
    },
    contact: {
        color: '#fafafa'
    }
};

const contacts = [
    {
        label: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/tan-nguyen248'
    },
    {
        label: 'GitHub',
        icon: 'github-square',
        link: 'https://github.com/tannguyen248'
    }
];

const PublicContact = ({ classes, ...props }) => {
    return (
        <Grid container justify='center' className={classes.root} {...props}>
        {contacts.map(contact => (
            <Tooltip key={contact.icon} title={contact.label}>
                <IconButton
                    className={classes.contact}
                    component='a'
                    href={contact.link}
                    target='_blank'
                >
                    <Icon component={FontAwesomeIcon} icon={['fab', contact.icon]} color='inherit' />
                </IconButton>
            </Tooltip>
        ))}
        </Grid>
    );
};

export default withStyles(styles)(PublicContact);