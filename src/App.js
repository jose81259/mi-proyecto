import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemText, Button, Card, CardContent, Grid, TextField } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useForm, Controller } from 'react-hook-form';

// Definir el tema personalizado
const theme = createTheme({
  palette: {
    primary: {
      main: '#ff5722', // Color principal personalizado
    },
    secondary: {
      main: '#03a9f4', // Color secundario personalizado
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif', // Fuente personalizada
    h4: {
      fontSize: '2rem', // Tamaño de fuente personalizado para h4
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px', // Bordes redondeados personalizados para los botones
        },
      },
    },
  },
});

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { handleSubmit, control, formState: { errors } } = useForm();
  const [submittedData, setSubmittedData] = useState(null);

  const onSubmit = (data) => {
    setSubmittedData(data);
  };

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const drawerList = (
    <div role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
      <List>
        <ListItem button>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="About" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Contact" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <ThemeProvider theme={theme}>
      <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" style={{ flexGrow: 1 }}>
              Mi Aplicación
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
        <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
          {drawerList}
        </Drawer>
        <div style={{ padding: 20 }}>
          <Typography variant="h4">Bienvenido a Mi Aplicación</Typography>
          <Button variant="contained" color="primary">
            ¡Hola Mundo!
          </Button>
          <Grid container spacing={3} style={{ marginTop: 20 }}>
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h5" component="div">
                    Tarjeta 1
                  </Typography>
                  <Typography color="textSecondary">
                    Contenido de la tarjeta 1.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h5" component="div">
                    Tarjeta 2
                  </Typography>
                  <Typography color="textSecondary">
                    Contenido de la tarjeta 2.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h5" component="div">
                    Tarjeta 3
                  </Typography>
                  <Typography color="textSecondary">
                    Contenido de la tarjeta 3.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          {/* Añadir el formulario aquí */}
          <Typography variant="h4" style={{ marginTop: 20 }}>Formulario de Registro</Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Controller
                  name="nombre"
                  control={control}
                  defaultValue=""
                  rules={{ required: 'Nombre es requerido' }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Nombre"
                      variant="outlined"
                      fullWidth
                      error={!!errors.nombre}
                      helperText={errors.nombre ? errors.nombre.message : ''}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  name="email"
                  control={control}
                  defaultValue=""
                  rules={{ required: 'Email es requerido', pattern: { value: /^[^@]+@[^@]+\.[^@]+$/, message: 'Email inválido' } }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Email"
                      variant="outlined"
                      fullWidth
                      error={!!errors.email}
                      helperText={errors.email ? errors.email.message : ''}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained" color="primary">
                  Registrar
                </Button>
              </Grid>
            </Grid>
          </form>
          {submittedData && (
            <div style={{ marginTop: 20 }}>
              <Typography variant="h6">Datos Enviados:</Typography>
              <pre>{JSON.stringify(submittedData, null, 2)}</pre>
            </div>
          )}
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
