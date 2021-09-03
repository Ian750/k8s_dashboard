# K8s_Dashboard

load dashboard  https://github.com/kubernetes/dashboard

取得Dashboard pod name

kubectl get pods -n kubernetes-dashboard
```sh
查看詳細資料
kubectl describe pod kubernetes-dashboard-67484c44f6-bktw8 -n kubernetes-dashboard
```

```sh
建立Service
kubectl apply -f dashboardService.yaml
```

```sh
查看nodePort
kubectl get services -n kubernetes-dashboard
```

```sh
建立自己的Service account
kubectl create sa cluster-admin-ian -n kube-system
```

```sh
建立Role binding
kubectl create -f ClusterRoleBinding.yaml
```

```sh
查看Service account
kubectl get sa cluster-admin-ian -n kube-system -o=yaml
```

```sh
 對token做base64 decode
kubectl get secret cluster-admin-ian-token-cjwz5 -o jsonpath={.data.token} -n kube-system | base64 -d
```

TestBlueGreenDep
建立node api
```sh
kubectl apply -f nodejs/node-deployment.yaml
kubectl apply -f nodejs/node-service.yaml
```

建立nginx
```sh
kubectl apply -f nginx/nginx-deployment.yaml
kubectl apply -f nginx/nginx-service.yaml
```

使用瀏覽器打開頁面
```sh
http://localhost:32000
```

更新api的版本觀察pod更新的狀態
```sh
kubectl apply -f node-deployment-red.yaml
kubectl apply -f node-deployment-yellow.yaml
```