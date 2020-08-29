import icoTelefonica from "../../assets/services/telefonica.svg";
import icoVideo from "../../assets/services/video.svg";
import icoFirewall from "../../assets/services/firewall.svg";
import icoEmail from "../../assets/services/zimba.svg";
import icoLinux from "../../assets/services/linux.svg";
import icoReds from "../../assets/services/reds.svg";
import icoVirtualizacion from "../../assets/services/virtualizacion.svg";
import icoSoporte from "../../assets/services/soporte.svg";

export const ServicesCards = [
  {
    Title: "Telefonia IP",
    Description: "Lleva la comunicación de tu empresa al siguiente nivel.",
    descriptionsecond:
      "Centrales ON Premise/Cloud,  Telefonos IP, Call Center On Premise/Cloud y Holding Telefonico(IVR).",
    icoColor: "#30CDFC",
    ico: icoTelefonica,
  },
  {
    Title: "Audio/Video Conferencia	",
    Description:
      "Permite la facilidad de reuniones de la empresa sin interrupciones y manten tu empresa en contacto sin importar donde estes.",
    icoColor: "#85EDB4",
    ico: icoVideo,
  },
  {
    Title: "Seguridad perimetral",
    Description:
      "Manten la seguridad de tu empresa protegida Trabajamos con las siguientes marcas: Sophos, fortinet, entre otros, Tambien contamos con una solucion Opensource	",
    icoColor: "#CDB6EF",
    ico: icoFirewall,
  },
  {
    Title: "Correos Corporativos",
    Description:
      "Servidor de correo, económico y seguro. Aumente la productividad y colaboración de tu empresa",
    descriptionsecond: "Zimbra - On Premise/Cloud.",
    icoColor: "#FF7F00",
    ico: icoEmail,
  },
  {
    Title: "Soluciones Opensource",
    Description:
      "Olvidate de las licencias y busca una solución colaborativa adaptable a las necesidades y presupuesto de la empresa.",
    icoColor: "#F9D41C",
    ico: icoLinux,
  },
  {
    Title: "Servidores de Red",
    Description:
      "Unifica la gestion de tu infraestructura de red monitorizando y controlando las TIC de tu organización",
    descriptionsecond: "(Zentyal - FreeNas - Zabbix - Monit).",
    icoColor: "#30CDFC",
    ico: icoReds,
  },
  {
    Title: "Virtualizacion de Servidores",
    Description:
      "Optimiza tu infraestructura y saca el máximo provecho a tus servidores con las soluciones de Virtualizacion",
    descriptionsecond: "PROXMOX VE , KVM , XEN SERVER.",
    icoColor: "#f73131",
    ico: icoVirtualizacion,
  },
  {
    Title: "Soportes",
    Description:
      "Nuestro servicio de soporte especializado trabajará en equipo con su empresa, ofrecemos simplicidad y economía.",
    descriptionsecond: "Soporte de servidores, linux.",
    icoColor: "#0a0ac6",
    ico: icoSoporte,
  },
];
