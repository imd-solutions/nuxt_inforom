output "service_name" {
  value = kubernetes_service.inform.metadata[0].name
}

output "service_port" {
  value = kubernetes_service.inform.spec[0].port[0].port
}
